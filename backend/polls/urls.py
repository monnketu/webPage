from django.urls import path
from rest_framework import routers
from .views import coWorkingViewSet_ikebukuro, coWorkingViewSet_shibuya, coWorkingViewSet_sinagawa, coWorkingViewSet_tokyo, coWorkingViewSet_shinjuku, coWorkingViewSet_others, coWorkingViewSet, coWorkingViewSet_wifi, coWorkingViewSet_low_cost, coWorkingViewSet_meeting_room, coWorkingViewSet_enhanced_options, coWorkingViewSet_dropin,coWorkingViewSet_all_time, reviewViewSet
from . import views

router = routers.DefaultRouter()
router.register('coWorkingSpace/all', coWorkingViewSet)
router.register('coWorkingSpace/shibuya', coWorkingViewSet_shibuya)
router.register('coWorkingSpace/shinjuku', coWorkingViewSet_shinjuku)
router.register('coWorkingSpace/ikebukuro', coWorkingViewSet_ikebukuro)
router.register('coWorkingSpace/tokyo', coWorkingViewSet_tokyo)
router.register('coWorkingSpace/sinagawa', coWorkingViewSet_sinagawa)
router.register('coWorkingSpace/others', coWorkingViewSet_others)
router.register('coWorkingSpace/wifi', coWorkingViewSet_wifi)
router.register('coWorkingSpace/low_cost', coWorkingViewSet_low_cost)
router.register('coWorkingSpace/meeting_room', coWorkingViewSet_meeting_room)
router.register('coWorkingSpace/enhanced_options', coWorkingViewSet_enhanced_options)
router.register('coWorkingSpace/dropIn', coWorkingViewSet_dropin)
router.register('coWorkingSpace/all_time', coWorkingViewSet_all_time)
router.register('coWorkingSpace/reviews', reviewViewSet)
# router.register('postReview', ReviewViewSet)
# router.register('line_api', line_api)
urlpatterns = [
  # path('', views.index, name='index'),
  # path('coupon/', views.coupon, name='coupon'),
  # path('getSimData/', views.getSimData, name='getSimData'),
  path('line_api/<slug:code>/', views.getLineAccessToken, name='getLineAccessToken'),
  # path('templates/', views.index_template, name='index_template'),
  # path('templates/test1/', views.index_template_test1, name='index_template_test1'),
  # path('postReview/', views.review_list, name='review_list'),
  path('postReview/',  views.review_list),
  # path('coupon/shibuya', views.coupon, name='coupon'),
  # path('coupon/shinjuku', views.coupon, name='coupon'),
  # path('coupon/ikebukuro', views.coupon, name='coupon'),
  # path('coupon/tokyo', views.coupon, name='coupon'),
  # path('coupon/shinagawa', views.coupon, name='coupon'),
  # path('coupon/others', views.coupon, name='coupon'),
]