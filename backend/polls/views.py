from django.shortcuts import render
from django.http import HttpResponse
from .models import coWorkingSpace # Couponクラスをインポート
import json
import math


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

def sim_jaccard(prefs, a, b):
    si = {}
    for item in prefs[a]:
        if item in prefs[b]:
            si[item] = 1

    n = len(si)
    if n == 0:
        return 0

    len_a = len(prefs[a])
    len_b = len(prefs[b])

    return n / (len_a + len_b - n)

def getSimData(request):
  
  # とーこへ　ここの関数の中に、データをとってくる処理、類似度を測定する処理を書いて欲しい
  return HttpResponse("Hello, world. You're at the polls getSimData.")