from django.contrib import admin
from .models import FriendsModel, MessageModel, UserMessageModel

# Register your models here.


admin.site.register(MessageModel)
admin.site.register(UserMessageModel)
admin.site.register(FriendsModel)
