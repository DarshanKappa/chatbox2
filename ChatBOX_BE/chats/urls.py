from django.urls import path
from .apis import ConversationChat, MessageViewset, UploadFile


urlpatterns = [
    path('', MessageViewset.as_view(), name='message_view'),
    path('conversation', ConversationChat.as_view(), name='conversation_view'),
    path('upload-file', UploadFile.as_view(), name='upload-file'),
    
]