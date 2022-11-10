from django.shortcuts import render

# Create your views here.

def index(req):
    print('-------------index called-------------------')
    return render(req, 'chat/index.html')

def room(request, room_name):
    print('-------------room called-------------------')
    return render(request, "chat/room.html", {"room_name": room_name})