from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    path('coupon/', views.coupon, name='coupon'),
    path('getSimData/', views.getSimData, name='getSimData'),
    path('line_api/', views.getLineAccessToken, name='getLineAccessToken'),
    path('templates/', views.index_template, name='index_template'),
    path('templates/test1/', views.index_template_test1, name='index_template_test1'),
    path('coupon/shibuya', views.coupon, name='coupon'),
    path('coupon/shinjuku', views.coupon, name='coupon'),
    path('coupon/ikebukuro', views.coupon, name='coupon'),
    path('coupon/tokyo', views.coupon, name='coupon'),
    path('coupon/shinagawa', views.coupon, name='coupon'),
    path('coupon/others', views.coupon, name='coupon'),



]