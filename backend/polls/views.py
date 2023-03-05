import json
import difflib
import django_filters
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework import viewsets, filters, generics
from .models import coWorkingSpace, review 
from .serializer import coWorkingSpaceSerializer, reviewSerializer
import logging
from urllib.parse import urlencode
from urllib.request import urlopen, Request
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
logger = logging.getLogger('development')


class coWorkingViewSet(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.all().order_by('price')
  serializer_class = coWorkingSpaceSerializer
  
  
class coWorkingViewSet_adachi(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "足立区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_arakawa(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "荒川区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_itabashi(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "板橋区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_edogawa(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "江戸川区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_ota(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "大田区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_katsushika(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "葛飾区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_kita(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "北区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_koutou(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "江東区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_shinagawa(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "品川区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_shibuya(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "渋谷区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_shinjuku(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "新宿区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_suginami(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "杉並区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_sumida(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "墨田区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_setagaya(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "世田谷区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_taito(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "台東区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_chuo(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "中央区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_chiyoda(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "千代田区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_toyoshima(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "豊島区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_nakano(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "中野区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_nerima(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "練馬区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_bunkyo(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "文京区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_minato(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "港区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_meguro(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "目黒区").order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_others(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(isAria23 = False).order_by('price')
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
  

class coWorkingViewSet_price_all(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(price__gt = 0).order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_price_10000(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(price__lt = 10000).order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_price_30000(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(price__gte = 10000, price__lt = 30000).order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_price_50000(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(price__gte = 30000, price__lt = 50000).order_by('price')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_price_infty(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(price__gte = 50000).order_by('price')
  serializer_class = coWorkingSpaceSerializer
  
  
class coWorkingViewSet_dropIn_1day_price_all(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(dropInFeePerDay__gt = 0).order_by('dropInFeePerDay')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_dropIn_1day_price_2000(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(dropInFeePerDay__gt = 0,dropInFeePerDay__lt = 2000).order_by('dropInFeePerDay')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_dropIn_1day_price_3000(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(dropInFeePerDay__gte = 2000, dropInFeePerDay__lt = 3000).order_by('dropInFeePerDay')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_dropIn_1day_price_4000(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(dropInFeePerDay__gte = 3000, dropInFeePerDay__lt = 4000).order_by('dropInFeePerDay')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_dropIn_1day_price_infty(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(dropInFeePerDay__gte = 4000).order_by('dropInFeePerDay')
  serializer_class = coWorkingSpaceSerializer
  
  
class coWorkingViewSet_dropIn_1hour_price_all(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(dropInFeePerHour__gt = 0).order_by('dropInFeePerHour')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_dropIn_1hour_price_500(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(dropInFeePerHour__lte = 500, dropInFeePerHour__gt = 0).order_by('dropInFeePerHour')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_dropIn_1hour_price_600(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(dropInFeePerHour__gte = 500, dropInFeePerDay__lt = 600).order_by('dropInFeePerHour')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_dropIn_1hour_price_700(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(dropInFeePerHour__gte = 600, dropInFeePerDay__lt = 700).order_by('dropInFeePerHour')
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_dropIn_1hour_price_infty(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(dropInFeePerHour__gte = 700).order_by('dropInFeePerHour')
  serializer_class = coWorkingSpaceSerializer
  
  
class coWorkingViewSet_all_time(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(startTime = '00:00:00', endTime = '23:59:00').order_by('price')
  serializer_class = coWorkingSpaceSerializer
class reviewViewSet(viewsets.ModelViewSet):
  queryset = review.objects.all()
  serializer_class = reviewSerializer
@api_view(['GET', 'POST'])
def getLineAccessToken(req, code):
  # if (req.method == 'POST'):
  print(json.loads(req.read().decode())['accessCode'])
  url = 'https://api.line.me/oauth2/v2.1/token/'
  url2 = 'https://api.line.me/oauth2/v2.1/verify'
  
  headers = {
    'accept':"application/json",
    "Content-Type" :"application/x-www-form-urlencoded"
  }
  request = Request(url, headers=headers)
  accessCode = code
  # redirect_uri = 'http://192.168.0.166:3000/'
  redirect_uri = 'http://localhost:3000/'
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

# @api_view(['POST'])
# def createCoWorkingSpaceReviewTable:
@csrf_exempt
def review_list(request):
  if (request.method == 'POST'):
    data = JSONParser().parse(request)
    print(data, 'datatata')
    setData = review(title=data['title'], memberID= data['memberID'], review=data['review'], spaceName=data['spaceName'])
    setData.save()
    returnData = {
      'title': data['title'],
      'memberID': data['memberID'],
      'review': data['review'],
      'spaceName': data['spaceName']
    }
    print(setData, 'setData')
    return HttpResponse(json.dumps(returnData))
    # return JsonResponse(serializer.errors, status=400)
  
@api_view(['GET', 'POST'])
def diagnose(req):
  coWorkingSpaces  = coWorkingSpace.objects.all()
  ret = coWorkingSpaces
  print(ret)
  return JsonResponse(ret)