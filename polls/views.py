from django.shortcuts import render
from django.http import HttpResponse
from .models import coWorkingSpace

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
def index_template(request):
    ctx = {}
    qs = coWorkingSpace.objects.all()
    ctx["object_list"] = qs
    return render(request, 'index.html', ctx)
def index_template_test1(request):
    return render(request, 'index_test1.html')
# Create your views here.
