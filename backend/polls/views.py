from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
import json
import difflib
import django_filters
from rest_framework import viewsets, filters
from .models import coWorkingSpace # Couponクラスをインポート
from .serializer import coWorkingSpaceSerializer
import logging
from urllib.parse import urlencode
from urllib.request import urlopen, Request

logger = logging.getLogger('development')
class coWorkingViewSet(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.all().order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_shibuya(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "渋谷").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_shinjuku(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "新宿").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_ikebukuro(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "池袋").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_tokyo(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "東京").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_sinagawa(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "品川").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_others(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "その他").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_wifi(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(wifi = 2).order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_low_cost(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(price__lte = 15000).order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_meeting_room(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(isMeetingRoom__gte = 1).order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_enhanced_options(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(isEnhancedOptions = True).order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_dropin(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(isDropIn = True).order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_all_time(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(startTime = '00:00:00', endTime = '23:59:00').order_by('price')
  serializer_class = coWorkingSpaceSerializer

@api_view(['GET', 'POST'])
def getLineAccessToken(req, code):
  # if (req.method == 'POST'):
  url = 'https://api.line.me/oauth2/v2.1/token/'
  url2 = 'https://api.line.me/oauth2/v2.1/verify'
  
  headers = {
    'accept':"application/json",
    "Content-Type" :"application/x-www-form-urlencoded"
  }
  request = Request(url, headers=headers)
  accessCode = code
  redirect_uri = 'http://localhost:3000/login'
  channel_id = 1657842449
  channel_secret = '31acec1fd7315a32c27ab510ed80fabe'
  code_verifier = 'wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1'
  data = {
    'grant_type': 'authorization_code',
    'code': accessCode,
    'redirect_uri': redirect_uri,
    'client_id': channel_id,
    'client_secret': channel_secret,
    'code_verifier': code_verifier,
  }
  data = urlencode(data).encode("utf-8")
  response = urlopen(request, data)
  response = json.loads(response.read().decode())
  # print((response['access_token']))
  # response = json.dump(response,ensure_ascii=False, indent=2)
  request2 = Request(url2, headers=headers)
  data2 = {
    'id_token': response['id_token'], 
    'client_id': channel_id
  }
  data2 = urlencode(data2).encode("utf-8")
  response2 = urlopen(request2, data2)
  # print(code)
  return HttpResponse(response2)