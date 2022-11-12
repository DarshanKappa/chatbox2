from django.contrib import admin
from .models import FriendsModel, MessageModel, UserMessageModel, UploadedFiles

# Register your models here.


admin.site.register(MessageModel)
admin.site.register(UserMessageModel)
admin.site.register(FriendsModel)
admin.site.register(UploadedFiles)
