from django.shortcuts import render
from django.http import HttpResponse
from .models import coWorkingSpace # Couponクラスをインポート
import json


def coupon(request):
    data = coWorkingSpace.objects.all() # テーブルにある全てのレコードを取得

    l = {}

    for i in range(18):
        params = {
            # 'coupon_code':str(data[0].code), # 個々のレコードはdata型なのでString型にキャストする
            # 'coupon_benefits':str(data[0].benefit),
            # 'coupon_explanation':str(data[0].explanation),
            # 'coupon_store':str(data[0].store),
            # 'coupon_start':str(data[0].start),
            # 'coupon_deadline':str(data[0].deadline),
            'coupon_status':str(data[i].name),
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
