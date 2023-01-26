from django.urls import path
from rest_framework import routers
from .views import coWorkingViewSet_ikebukuro, coWorkingViewSet_shibuya, coWorkingViewSet_sinagawa, coWorkingViewSet_tokyo, coWorkingViewSet_shinjuku, coWorkingViewSet_others
from . import views

router = routers.DefaultRouter()
router.register('coWorkingSpace/shibuya', coWorkingViewSet_shibuya)
router.register('coWorkingSpace/shinjuku', coWorkingViewSet_shinjuku)
router.register('coWorkingSpace/ikebukuro', coWorkingViewSet_ikebukuro)
router.register('coWorkingSpace/tokyo', coWorkingViewSet_tokyo)
router.register('coWorkingSpace/sinagawa', coWorkingViewSet_sinagawa)
router.register('coWorkingSpace/others', coWorkingViewSet_others)
urlpatterns = [
  path('', views.index, name='index'),
  # path('coupon/', views.coupon, name='coupon'),
  path('getSimData/', views.getSimData, name='getSimData'),
  path('getSimData/shibuya', views.getSimData_shibuya, name='getSimData_shibuya'),
  path('getSimData/shinjuku', views.getSimData_shibuya, name='getSimData_shibuya'),
  path('getSimData/ikebukuro', views.getSimData_shibuya, name='getSimData_shibuya'),
  path('getSimData/shibuya', views.getSimData_shibuya, name='getSimData_shibuya'),
  path('getSimData/shibuya', views.getSimData_shibuya, name='getSimData_shibuya'),
  path('getSimData/shibuya', views.getSimData_shibuya, name='getSimData_shibuya'),
  path('line_api/', views.getLineAccessToken, name='getLineAccessToken'),
  path('templates/', views.index_template, name='index_template'),
  path('templates/test1/', views.index_template_test1, name='index_template_test1'),
  
  # path('coupon/shibuya', views.coupon, name='coupon'),
  # path('coupon/shinjuku', views.coupon, name='coupon'),
  # path('coupon/ikebukuro', views.coupon, name='coupon'),
  # path('coupon/tokyo', views.coupon, name='coupon'),
  # path('coupon/shinagawa', views.coupon, name='coupon'),
  # path('coupon/others', views.coupon, name='coupon'),
]