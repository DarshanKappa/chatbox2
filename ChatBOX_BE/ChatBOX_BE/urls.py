"""ChatBOX_BE URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from chats.apis import FriendListAPI, MessageViewset, RequestAcceptReject, SearchFriendsResult, UserDetail
from user.apis import RegistrationAPIView, SinginAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup', RegistrationAPIView.as_view(), name='signup'),
    path('signin', SinginAPIView.as_view(), name='signin'),
    path('chat/', include('chats.urls')),
    path('search-friends', SearchFriendsResult.as_view(), name='search-friends'),
    path('user-detail', UserDetail.as_view(), name='user-detail'),
    path('request-accept-reject', RequestAcceptReject.as_view(), name='request-accept'),
    path('friends', FriendListAPI.as_view(), name='friends'),
]

