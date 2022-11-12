from dataclasses import field
from statistics import mode
from rest_framework import serializers
from .models import FriendsModel, UserMessageModel, MessageModel
from django.contrib.auth.models import User
from django.db.models import Q

class Messageserializer(serializers.ModelSerializer):
    
    class Meta:
        model = MessageModel
        fields = '__all__'

class ChatsSerializer(serializers.ModelSerializer):
        
    message = serializers.SerializerMethodField(read_only=True)
        
    class Meta:
        model = UserMessageModel
        fields = ('id', 'sender', 'receiver', 'message')

    def get_message(self, obj):
        print(Messageserializer(obj.message).data)
        return Messageserializer(obj.message).data

    def to_internal_value(self, data):
        print(data)
        data['sender'] = User.objects.get(pk=data.get('sender'))
        data['receiver'] = User.objects.get(pk=data.get('receiver'))
        data['friends'] = FriendsModel.objects.get(Q(friend_1=data['sender'], friend_2=data['receiver']) | Q(friend_2=data['sender'], friend_1=data['receiver']))
        message = MessageModel(message=data.get('message'))
        message.save()
        data['message'] = message
        
        return data


class ConversationChatSerializer(serializers.ModelSerializer):
    
    sender = serializers.SerializerMethodField()
    receiver = serializers.SerializerMethodField()
    message = serializers.SerializerMethodField()
    
    class Meta:
        model = UserMessageModel
        fields = ('id', 'sender', 'receiver', 'message')
        
    def get_sender(self, obj):
        se = {'id': obj.sender.id, 'name': obj.sender.first_name}
        return se

    def get_receiver(self, obj):
        re = {'id': obj.receiver.id, 'name': obj.receiver.first_name}
        return re

    def get_message(self, obj):
        msg = {
            'message': obj.message.message,
            'created': {
                'date':obj.message.created.strftime("%d %h,%Y"),
                'time': obj.message.created.strftime("%w:%M %p")
                },
            'url': obj.message.file_url
        }
        return msg
    
    
class SearchFriendsResultsSerializer(serializers.ModelSerializer):
    
    # friend = serializers.SerializerMethodField()
    
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
        )
    
    # def get_friend(self, obj):
    #     print(obj.)
    #     return 'No'
    
    
class FriendsSerializer(serializers.ModelSerializer):
    
    friend = serializers.SerializerMethodField()
    
    class Meta:
        model = FriendsModel
        fields = (
            'id',
            'friend',
        )
        
    def get_friend(self, obj):
        auth_user = self.context.get('auth_user')
        if obj.friend_1 == auth_user:
            friend = obj.friend_2
        else:
            friend = obj.friend_1
        friend_detail = {'id': friend.id, 'username': friend.username,
                         'first_name': friend.first_name, 'last_name': friend.last_name}
        return friend_detail
        
        
        