from email.policy import default
from django.db import models
from django.db.models import CASCADE
from django.contrib.auth.models import User

# Create your models here.



class FriendsModel(models.Model):

    friend_1 = models.ForeignKey(User, related_name='friends_1', null=True, on_delete=CASCADE)
    friend_2 = models.ForeignKey(User, related_name='friends_2', null=True, on_delete=CASCADE)
    is_friends = models.BooleanField(default=False)
    requested_from = models.ForeignKey(User, related_name='friends_from', null=True, on_delete=CASCADE)
    requested_to = models.ForeignKey(User, related_name='friends_to', null=True, on_delete=CASCADE)
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    
class UploadedFiles(models.Model):
    
    file = models.FileField(upload_to='uploaded_files/', null=True)
    type = models.CharField(max_length=50, null=True, blank=True)
    filename = models.CharField(max_length=200, null=True, blank=True)

class MessageModel(models.Model):

    message = models.TextField(blank=True, null=True)
    file_url = models.CharField(max_length=1000, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True, null=True, blank=True)
    
class UserMessageModel(models.Model):
    
    sender = models.ForeignKey(User, related_name='sender_message', null=True, on_delete=CASCADE)
    receiver = models.ForeignKey(User, related_name='receiver_message', null=True, on_delete=CASCADE) 
    message = models.ForeignKey(MessageModel, null=True, on_delete=CASCADE)
    friends = models.ForeignKey(FriendsModel, null=True, related_name='conversation', on_delete=CASCADE)

    
    