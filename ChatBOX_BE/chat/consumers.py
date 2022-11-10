# chat/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer, JsonWebsocketConsumer, WebsocketConsumer
from channels.db import database_sync_to_async
from asgiref.sync import sync_to_async, async_to_sync
from django.contrib.auth.models import User
from chats.models import MessageModel, UserMessageModel, FriendsModel
from django.db.models import Q
from chats.serializers import ConversationChatSerializer

class ChatConsumer(JsonWebsocketConsumer):
    def connect(self):
        print(self.scope['url_route'])
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_%s" % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        print(type(text_data))
        print(text_data)
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]
        
        msg = MessageModel(message=message.get('message'))
        msg.save()
        
        sender = User.objects.get(pk=message.get('sender'))
        receiver = User.objects.get(pk=message.get('receiver'))
        
        friends = FriendsModel.objects.get(Q(friend_1=sender, friend_2=receiver) | Q(friend_1=receiver, friend_2=sender))

        user_msg = UserMessageModel(sender=sender, receiver=receiver, message=msg, friends=friends)
        user_msg.save()
        
        serialize = ConversationChatSerializer(user_msg)
        message = serialize.data
        print(message)
        print('----------save------------')
        print(msg.id)

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name, {"type": "oneToOneConversation", "message": message}
        )

    # Receive message from room group
    def oneToOneConversation(self, event):
        message = event["message"]
        print('------------return------------')
        print(message)

        # Send message to WebSocket
        self.send(text_data=json.dumps({"message": message}))

# class ChatConsumer(JsonWebsocketConsumer):
#     def connect(self):
#         self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
#         self.room_group_name = "chat_%s" % self.room_name

#         # Join room group
#         self.channel_layer.group_add(self.room_group_name, self.channel_name)

#         self.accept()

#     def disconnect(self, close_code):
#         # Leave room group
#         self.channel_layer.group_discard(self.room_group_name, self.channel_name)

#     # def query(self, message):
#     #     print('=================================')
#     #     return self.channel_layer.group_send(
#     #         self.room_group_name, {"type": "chat_message", "message": message}
#     #     )
#     # Receive message from WebSocket
#     def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         print(text_data_json)
#         # text_data_json = text_data
#         message = text_data_json["message"]
#         # msg = MessageModel(message="message").save()
#         print('----------------save model-------------')
#         # Send message to room group
#         # self.query(message))
#         self.channel_layer.group_send(
#             self.room_group_name, {"type": "chat_message", "message": message}
#         )
        
#     def send_json(self, content, close=False):
#         return super().send_json(content, close)

#     # Receive message from room group
#     def chat_message(self, event):
#         message = event["message"]
#         print('----------client send---------------')
    
#         print(message)
#         print(event)
#         # Send message to WebSocket
#         self.send({"message": message})
#         # await self.send(text_data=json.dumps({"message": message}))








# # chat/consumers.py
# import json
# from channels.generic.websocket import WebsocketConsumer


# class ChatConsumer(WebsocketConsumer):
#     def connect(self):
#         self.accept()

#     def disconnect(self, close_code):
#         pass

#     def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         print('----------------Data-------------------')
#         print(text_data)
#         message = text_data_json["message"]

#         self.send(text_data=json.dumps({"message": message}))