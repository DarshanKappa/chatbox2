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
    
    
class UploadFile(APIView):
    
    def post(self, req, *args, **kwargs):
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