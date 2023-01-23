from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    path('coupon/', views.coupon, name='coupon'),
    path('templates/', views.index_template, name='index_template'),
    path('templates/test1/', views.index_template_test1, name='index_template_test1'),
]