from django.shortcuts import render
from django.http import HttpResponse
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
class coWorkingViewSet_shibuya(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "渋谷")
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_shinjuku(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "新宿")
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_ikebukuro(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "池袋")
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_tokyo(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "東京")
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_sinagawa(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "品川")
  serializer_class = coWorkingSpaceSerializer
class coWorkingViewSet_others(viewsets.ModelViewSet):
  queryset = coWorkingSpace.objects.filter(aria = "その他")
  serializer_class = coWorkingSpaceSerializer

def getLineAccessToken(req):
  url = 'https://api.line.me/oauth2/v2.1/token/'
  
  headers = {
    'accept':"application/json",
    "Content-Type" :"application/x-www-form-urlencoded"
  }
  request = Request(url, headers=headers)
  accessCode = 'cgjFFo8yGtVs5VTafSYV'
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
  print(req.POST)
  return HttpResponse(response)

def coupon_shibuya(request):

  # 以下のdata変数をすべてのデータを取得から与えられた条件に一致するものを検索して取得に変更
  # data = coWorkingSpace.objects.all() # テーブルにある全てのレコードを取得
  data = coWorkingSpace.objects.filter(aria = "渋谷")

  print(data)
  l = {}

  for i in range(len(data)):
    params = {      
      'coupon_spaceID':str(data[i].spaceID),
      'coupon_aria':str(data[i].aria),
      'coupon_name':str(data[i].name),
      'coupon_address':str(data[i].address),
      'coupon_station':str(data[i].station),
      'coupon_wi-fi':str(data[i].wifi),
      'coupon_isBattery':str(data[i].isBattery),
      'coupon_isMeetingRoom':str(data[i].isMeetingRoom),
      'coupon_isDropIn':str(data[i].isDropIn),
      'coupon_price':str(data[i].price),
      'coupon_startTime':str(data[i].startTime),
      'coupon_endTime':str(data[i].endTime),
      'coupon_favorite':str(data[i].favorite),
      'coupon_jurisdiction':str(data[i].jurisdiction),
    }
    l['param' + str(i)] = json.dumps(params, ensure_ascii=False, indent=2)

def coupon_shinjuku(request):

  # 以下のdata変数をすべてのデータを取得から与えられた条件に一致するものを検索して取得に変更
  # data = coWorkingSpace.objects.all() # テーブルにある全てのレコードを取得
  data = coWorkingSpace.objects.filter(aria = "新宿")

  print(data)
  l = {}

  for i in range(len(data)):
    params = {      
      'coupon_spaceID':str(data[i].spaceID),
      'coupon_aria':str(data[i].aria),
      'coupon_name':str(data[i].name),
      'coupon_address':str(data[i].address),
      'coupon_station':str(data[i].station),
      'coupon_wi-fi':str(data[i].wifi),
      'coupon_isBattery':str(data[i].isBattery),
      'coupon_isMeetingRoom':str(data[i].isMeetingRoom),
      'coupon_isDropIn':str(data[i].isDropIn),
      'coupon_price':str(data[i].price),
      'coupon_startTime':str(data[i].startTime),
      'coupon_endTime':str(data[i].endTime),
      'coupon_favorite':str(data[i].favorite),
      'coupon_jurisdiction':str(data[i].jurisdiction),
    }
    l['param' + str(i)] = json.dumps(params, ensure_ascii=False, indent=2)


def coupon_ikebukuro(request):

  # 以下のdata変数をすべてのデータを取得から与えられた条件に一致するものを検索して取得に変更
  # data = coWorkingSpace.objects.all() # テーブルにある全てのレコードを取得
  data = coWorkingSpace.objects.filter(aria = "池袋")

  print(data)
  l = {}

  for i in range(len(data)):
    params = {      
      'coupon_spaceID':str(data[i].spaceID),
      'coupon_aria':str(data[i].aria),
      'coupon_name':str(data[i].name),
      'coupon_address':str(data[i].address),
      'coupon_station':str(data[i].station),
      'coupon_wi-fi':str(data[i].wifi),
      'coupon_isBattery':str(data[i].isBattery),
      'coupon_isMeetingRoom':str(data[i].isMeetingRoom),
      'coupon_isDropIn':str(data[i].isDropIn),
      'coupon_price':str(data[i].price),
      'coupon_startTime':str(data[i].startTime),
      'coupon_endTime':str(data[i].endTime),
      'coupon_favorite':str(data[i].favorite),
      'coupon_jurisdiction':str(data[i].jurisdiction),
    }
    l['param' + str(i)] = json.dumps(params, ensure_ascii=False, indent=2)

def coupon_tokyo(request):

  # 以下のdata変数をすべてのデータを取得から与えられた条件に一致するものを検索して取得に変更
  # data = coWorkingSpace.objects.all() # テーブルにある全てのレコードを取得
  data = coWorkingSpace.objects.filter(aria = "東京")

  print(data)
  l = {}

  for i in range(len(data)):
    params = {      
      'coupon_spaceID':str(data[i].spaceID),
      'coupon_aria':str(data[i].aria),
      'coupon_name':str(data[i].name),
      'coupon_address':str(data[i].address),
      'coupon_station':str(data[i].station),
      'coupon_wi-fi':str(data[i].wifi),
      'coupon_isBattery':str(data[i].isBattery),
      'coupon_isMeetingRoom':str(data[i].isMeetingRoom),
      'coupon_isDropIn':str(data[i].isDropIn),
      'coupon_price':str(data[i].price),
      'coupon_startTime':str(data[i].startTime),
      'coupon_endTime':str(data[i].endTime),
      'coupon_favorite':str(data[i].favorite),
      'coupon_jurisdiction':str(data[i].jurisdiction),
    }
    l['param' + str(i)] = json.dumps(params, ensure_ascii=False, indent=2)


def coupon_shinagawa(request):

  # 以下のdata変数をすべてのデータを取得から与えられた条件に一致するものを検索して取得に変更
  # data = coWorkingSpace.objects.all() # テーブルにある全てのレコードを取得
  data = coWorkingSpace.objects.filter(aria = "品川")

  print(data)
  l = {}

  for i in range(len(data)):
    params = {      
      'coupon_spaceID':str(data[i].spaceID),
      'coupon_aria':str(data[i].aria),
      'coupon_name':str(data[i].name),
      'coupon_address':str(data[i].address),
      'coupon_station':str(data[i].station),
      'coupon_wi-fi':str(data[i].wifi),
      'coupon_isBattery':str(data[i].isBattery),
      'coupon_isMeetingRoom':str(data[i].isMeetingRoom),
      'coupon_isDropIn':str(data[i].isDropIn),
      'coupon_price':str(data[i].price),
      'coupon_startTime':str(data[i].startTime),
      'coupon_endTime':str(data[i].endTime),
      'coupon_favorite':str(data[i].favorite),
      'coupon_jurisdiction':str(data[i].jurisdiction),
    }
    l['param' + str(i)] = json.dumps(params, ensure_ascii=False, indent=2)
  
def coupon_others(request):

  # 以下のdata変数をすべてのデータを取得から与えられた条件に一致するものを検索して取得に変更
  # data = coWorkingSpace.objects.all() # テーブルにある全てのレコードを取得
  data = coWorkingSpace.objects.filter(aria = "その他")

  print(data)
  l = {}

  for i in range(len(data)):
    params = {      
      'coupon_spaceID':str(data[i].spaceID),
      'coupon_aria':str(data[i].aria),
      'coupon_name':str(data[i].name),
      'coupon_address':str(data[i].address),
      'coupon_station':str(data[i].station),
      'coupon_wi-fi':str(data[i].wifi),
      'coupon_isBattery':str(data[i].isBattery),
      'coupon_isMeetingRoom':str(data[i].isMeetingRoom),
      'coupon_isDropIn':str(data[i].isDropIn),
      'coupon_price':str(data[i].price),
      'coupon_startTime':str(data[i].startTime),
      'coupon_endTime':str(data[i].endTime),
      'coupon_favorite':str(data[i].favorite),
      'coupon_jurisdiction':str(data[i].jurisdiction),
    }
    l['param' + str(i)] = json.dumps(params, ensure_ascii=False, indent=2)
       


  json_str = json.dumps(l, ensure_ascii=False, indent=2)
  return HttpResponse(json_str)



def index(request):
  return HttpResponse("Hello, world. You're at the polls index.")
def index_template(request):
  print(request)
  ctx = {}
  qs = coWorkingSpace.objects.all()
  ctx["object_list"] = qs
  return render(request, 'index.html', ctx)
def index_template_test1(request):
  return render(request, 'index_test1.html')

def search_result(request):
  # データベースなどからとってきた情報を格納しhtmlファイルに渡す
  ctx = {}
  print(request)
  return render(request, 'search_result.html', ctx)
# Create your views here.
# 


def getSimData(request):
  l = {}
  def coupon(request):#データをとってくる処理
    data = coWorkingSpace.objects.all()
    
    

    for i in range(len(data)):
      params = {      
        'spaceID':str(data[i].spaceID),
        'aria':str(data[i].aria),
        'name':str(data[i].name),
        'address':str(data[i].address),
        'station':str(data[i].station),
        'wi-fi':str(data[i].wifi),
        'isBattery':str(data[i].isBattery),
        'isMeetingRoom':str(data[i].isMeetingRoom),
        'isDropIn':str(data[i].isDropIn),
        'price':str(data[i].price),
        'startTime':str(data[i].startTime),
        'endTime':str(data[i].endTime),
        'favorite':str(data[i].favorite),
        'jurisdiction':str(data[i].jurisdiction),
      }
      l['param' + str(i)] = (params)

  # 同じテキスト
  coupon(request)
  def search_keyword(): #類似度を計算して配列に加える
    li = []
    # l = {
    #   'param0':　{coupon_aria:　'渋谷',　},
    #   'param1':　{},
    #   'param2':　{},
    #   'param3':　{},
    #   'param4':　{},
    # }
    for text in l.keys():
      text_a = '新宿'
      print(text)
      # li.append(l[text])
      text_b = l[text]['aria']
      print(text_b)
      r = difflib.SequenceMatcher(None, text_a, text_b).ratio()
      if r > 0.5:
        li.append(l[text])
    
    return li

  # とーこへ　ここの関数の中に、データをとってくる処理、類似度を測定する処理を書いて欲しい
  
  l = dict(param = search_keyword())
  json_str = json.dumps(l, ensure_ascii=False, indent=2)
  return HttpResponse(json_str)
  # return json_str
def getSimData_shibuya(request):
  l = {}
  def coupon(request):#データをとってくる処理
    data = coWorkingSpace.objects.all()
    
    

    for i in range(len(data)):
      params = {      
        'spaceID':str(data[i].spaceID),
        'aria':str(data[i].aria),
        'name':str(data[i].name),
        'address':str(data[i].address),
        'station':str(data[i].station),
        'wi-fi':str(data[i].wifi),
        'isBattery':str(data[i].isBattery),
        'isMeetingRoom':str(data[i].isMeetingRoom),
        'isDropIn':str(data[i].isDropIn),
        'price':str(data[i].price),
        'startTime':str(data[i].startTime),
        'endTime':str(data[i].endTime),
        'favorite':str(data[i].favorite),
        'jurisdiction':str(data[i].jurisdiction),
      }
      l['param' + str(i)] = (params)

  # 同じテキスト
  coupon(request)
  def search_keyword(): #類似度を計算して配列に加える
    li = []
    # l = {
    #   'param0':　{coupon_aria:　'渋谷',　},
    #   'param1':　{},
    #   'param2':　{},
    #   'param3':　{},
    #   'param4':　{},
    # }
    for text in l.keys():
      text_a = '渋谷'
      print(text)
      # li.append(l[text])
      text_b = l[text]['aria']
      print(text_b)
      r = difflib.SequenceMatcher(None, text_a, text_b).ratio()
      if r > 0.5:
        li.append(l[text])
    
    return li

  # とーこへ　ここの関数の中に、データをとってくる処理、類似度を測定する処理を書いて欲しい
  
  l = dict(param = search_keyword())
  json_str = json.dumps(l, ensure_ascii=False, indent=2)
  return HttpResponse(json_str)
  # return json_str