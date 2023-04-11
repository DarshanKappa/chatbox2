from datetime import datetime
from urllib import request
from rest_framework.generics import ListAPIView, ListCreateAPIView
from .models import FriendsModel, UserMessageModel, MessageModel, UploadedFiles
from django.contrib.auth.models import User
from django.db.models import Q
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import ChatsSerializer, ConversationChatSerializer, FriendsSerializer, SearchFriendsResultsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import json


class MessageViewset(ListCreateAPIView):
    
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )
    serializer_class = ChatsSerializer
    queryset = UserMessageModel.objects.all()


class ConversationChat(ListAPIView):
    
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    
    serializer_class = ConversationChatSerializer
    
    def get_queryset(self):
        data = self.request.query_params
        auth_user = self.request.user
        print(data)
        # if not data:
        #     queryset = FriendsModel.objects.filter(Q(friend_1=auth_user) | Q(friend_2=auth_user))
        #     last_conver_friend = queryset.order_by('-conversation__message__created').first()
        #     queryset = last_conver_friend.conversation.all().order_by('message__created')
        # else:
        opposite_user = data.get('opposite_user')
        opposite_user = User.objects.filter(pk=opposite_user).first()
        if not opposite_user:
            return []
        
        queryset = UserMessageModel.objects.filter(Q(Q(sender=auth_user) & Q(receiver=opposite_user))
                                                    | Q(Q(sender=opposite_user) & Q(receiver=auth_user))).order_by('message__created')
        
        return queryset
    
class SearchFriendsResult(ListAPIView):
    
    authentication_classes = (TokenAuthentication, )
    permission_classes = (AllowAny, )
    serializer_class = SearchFriendsResultsSerializer

    def get_queryset(self):
        print(self.request.user)
        data = self.request.query_params
        print(data)
        value = data.get("value")
        if value == "":
            return []
        regex = ""
        for idx, v in enumerate(value):
            v = v.lower()
            if idx == 0:
                regex += f".*[{v}{v.upper()}]"
            else:
                regex += f"[{v}{v.upper()}]"
        queryset = User.objects.filter(Q(Q(username__regex=regex)
                                         |Q(first_name__regex=regex)
                                         |Q(last_name__regex=regex)))
        if self.request.user.id:
            queryset = queryset.exclude(id=self.request.user.id)
        print(queryset)
                
        return queryset

class FriendListAPI(ListAPIView):
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    serializer_class = FriendsSerializer
    
    def get_queryset(self):
        data = self.request.query_params
        print(data)
        auth_user = self.request.user
        sort_list = []
        queryset = FriendsModel.objects.filter(Q(Q(friend_1=auth_user) | Q(friend_2=auth_user)) & Q(is_friends=True))
        queryset1 = queryset.filter(~Q(conversation=None))
        queryset2 = queryset.filter(conversation=None)
        # queryset = queryset.order_by('-conversation__message__created')
        queryset1 = sorted(queryset1, key=lambda q : q.conversation.all().last().message.created, reverse=True)
        queryset = list(queryset1) + list(queryset2)
        return queryset


    def get_serializer_context(self):
        return {'auth_user':self.request.user}


class UserDetail(APIView):
    
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    
    def get(self, request, *args, **kwargs):
        auth_user = request.user
        data = request.query_params
        user_id = data.get('user_id')
        print(user_id)
        print(auth_user)
        user = User.objects.get(pk=user_id)
        friend = FriendsModel.objects.filter(Q(friend_1=auth_user, friend_2=user) | Q(friend_1=user, friend_2=auth_user)).first()
        res = {'status': 0} # Unknown User
        if friend:
            if friend.is_friends:
                res = {'status': 1} # Friend
            elif friend.requested_from == auth_user:
                res = {'status': 2} # Requested
            else:
                res = {'status': 3} # Recieved Request
        return Response(res)
    

class RequestAcceptReject(APIView):
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    
    def post(self, request, *args, **kwargs):
        # action = 2 --> Request
        # action = 1 --> Accept the received Request
        # action = 0 --> Reject or Cancel the Request 
        data = request.data
        print(data)
        auth_user = request.user
        user_id = data.get('user_id')
        action = data.get('action')
        user = User.objects.get(pk=user_id)
        friend = FriendsModel.objects.filter(Q(friend_1=auth_user, friend_2=user) | Q(friend_1=user, friend_2=auth_user)).first()
        if not friend:
            if action == 2:
                friend = FriendsModel(friend_1=auth_user,
                                    friend_2=user,
                                    requested_from=auth_user,
                                    requested_to=user)
                friend.save()
            else:
                return Response({'Wrong action'}, status=400)
        else:
            if action == 2 and friend.requested_to == auth_user:
                friend.is_friends = True
                friend.save()
            elif action == 2 and friend.requested_from == auth_user:
                pass
            elif action == 1:
                friend.is_friends = True
                friend.save()
            elif action == 0:
                friend.delete()
            else:
                return Response({'Wrong action'}, status=400)

        return Response({""})
    
def pad_zeros(binary_as_str, length):
    subtraction = length - len(binary_as_str)
    return "0" * subtraction + binary_as_str


def binary_addition(binary_as_str1, binary_as_str2):
    counter , sm_in_string= 0, ""
    if len(binary_as_str1) < len(binary_as_str2):
        binary_as_str1 = pad_zeros(binary_as_str1, len(binary_as_str2))
    elif len(binary_as_str2) < len(binary_as_str1):
        binary_as_str2 = pad_zeros(binary_as_str2, len(binary_as_str1))
    for i in range(len(binary_as_str1) - 1, - 1, - 1):
        if binary_as_str1[i] == "1":
            counter += 1
        if binary_as_str2[i] == "1":
            counter += 1
        sm_in_string = str(counter % 2) + sm_in_string
        if counter >= 2:
            counter = 1
        else:
            counter = 0
    if counter % 2 == 1:
        return "1" + sm_in_string
    else:
        return sm_in_string


def round_to_zero(binary_as_str):
    counter = 0
    second_counter = 0
    for i in range(8, len(binary_as_str) + 1):
        if len(binary_as_str) < 8:
            return binary_as_str
        else:
            if i % 8 == 0:  # 8
                counter += 8
            else:  # 9, 10, 11
                counter += 1
                second_counter += 1  # 1, 2, 3
    rounded = counter + (8 - second_counter)  # 11
    return rounded


def decimal_to_binary(decimal_num):
    binary = ""  # It will increase as the loop continues, will increase by "0" or "1".
    counter = decimal_num  # The decimal number will be decreased with each run.
    while counter != 0:  # If it is equal to zero it means the transformation has ended.
        if counter % 2 == 0:
            counter = counter // 2  # Floor division, e.g: 29.5 goes to 29.
            binary = "0" + binary
        else:
            counter = counter // 2  #  Floor division, e.g: 29.5 goes to 29.
            binary = "1" + binary
    if decimal_num == 0:
        binary = "0"
    return binary  # Returns the binary in string after all the process


def twos_compliment(num_dec):
    str1 = ""
    if num_dec > 0:
        binary_in_string = pad_zeros(decimal_to_binary(num_dec), round_to_zero(decimal_to_binary(num_dec))) # 1100100
        for i in range(len(binary_in_string)): # 7-1=6
            if binary_in_string[i] == "0":
                str1 = str1 + "1"
            else:
                str1 = str1 + "0"
        str1 = binary_addition(str1, "1")
    else:
        decimal = decimal_to_binary(num_dec * (-1))
        length = round_to_zero(decimal_to_binary(num_dec * (-1)))
        return pad_zeros(decimal, length)
    return str1

bytes()
    
class UploadFile(APIView):

    
    def post(self, req, *args, **kwargs):
        print('-------------------------------------------------')
        print(req.FILES)
        print(req.data)
        v = req.data.get('file12')
        f = list(v.values())
        bb = map(lambda x : twos_compliment(x),f)
        f1 = bytearray(f)
        print(f1)
        print(bb)
        bbb = "".join(bb)
        with open("my_file.jpeg", "wb") as binary_file:
   
            # Write bytes to file
            binary_file.write(bb)
        print(bbb)
        if req.FILES.get('file'):
            file = req.FILES.get('file')
            upload_file = UploadedFiles(file=file, filename=file._name, type=file.content_type)
            upload_file.save()
            print('0000000000000000000000000000')
            print(file.__dict__)
            print(req.data)
            url = f"http://{req.META.get('HTTP_HOST')}{upload_file.file.url}"
            return Response(data={'url': url})
        else:
            return Response({}, status=400)