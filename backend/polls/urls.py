from django.urls import path
from rest_framework import routers
from .views import coWorkingViewSet_adachi, coWorkingViewSet_arakawa, coWorkingViewSet_itabashi, coWorkingViewSet_edogawa, coWorkingViewSet_ota, coWorkingViewSet_katsushika, coWorkingViewSet_kita, coWorkingViewSet_koutou, coWorkingViewSet_shinagawa, coWorkingViewSet_shibuya, coWorkingViewSet_shinjuku, coWorkingViewSet_suginami, coWorkingViewSet_sumida, coWorkingViewSet_setagaya, coWorkingViewSet_taito, coWorkingViewSet_chuo, coWorkingViewSet_chiyoda,coWorkingViewSet_toyoshima, coWorkingViewSet_nakano,coWorkingViewSet_nerima,coWorkingViewSet_bunkyo, coWorkingViewSet_minato, coWorkingViewSet_meguro, coWorkingViewSet_others, coWorkingViewSet, coWorkingViewSet_wifi, coWorkingViewSet_low_cost, coWorkingViewSet_meeting_room, coWorkingViewSet_enhanced_options, coWorkingViewSet_dropin,coWorkingViewSet_all_time ,reviewViewSet,coWorkingViewSet_price_all, coWorkingViewSet_price_10000, coWorkingViewSet_price_30000, coWorkingViewSet_price_50000, coWorkingViewSet_price_infty, coWorkingViewSet_dropIn_1day_price_all, coWorkingViewSet_dropIn_1day_price_2000, coWorkingViewSet_dropIn_1day_price_3000, coWorkingViewSet_dropIn_1day_price_4000, coWorkingViewSet_dropIn_1day_price_infty, coWorkingViewSet_dropIn_1hour_price_all,coWorkingViewSet_dropIn_1hour_price_500, coWorkingViewSet_dropIn_1hour_price_600, coWorkingViewSet_dropIn_1hour_price_700, coWorkingViewSet_dropIn_1hour_price_infty
from . import views

router = routers.DefaultRouter()
router.register('coWorkingSpace/all', coWorkingViewSet)
router.register('coWorkingSpace/adachi', coWorkingViewSet_adachi)
router.register('coWorkingSpace/arakawa', coWorkingViewSet_arakawa)
router.register('coWorkingSpace/itabashi', coWorkingViewSet_itabashi)
router.register('coWorkingSpace/edogawa', coWorkingViewSet_edogawa)
router.register('coWorkingSpace/ota', coWorkingViewSet_ota)
router.register('coWorkingSpace/katsushika', coWorkingViewSet_katsushika)
router.register('coWorkingSpace/kita', coWorkingViewSet_kita)
router.register('coWorkingSpace/koutou', coWorkingViewSet_koutou)
router.register('coWorkingSpace/shinagawa', coWorkingViewSet_shinagawa)
router.register('coWorkingSpace/shibuya', coWorkingViewSet_shibuya)
router.register('coWorkingSpace/shinjuku', coWorkingViewSet_shinjuku)
router.register('coWorkingSpace/suginami', coWorkingViewSet_suginami)
router.register('coWorkingSpace/sumida', coWorkingViewSet_sumida)
router.register('coWorkingSpace/setagaya', coWorkingViewSet_setagaya)
router.register('coWorkingSpace/taito', coWorkingViewSet_taito)
router.register('coWorkingSpace/chuo', coWorkingViewSet_chuo)
router.register('coWorkingSpace/chiyoda', coWorkingViewSet_chiyoda)
router.register('coWorkingSpace/toyoshima', coWorkingViewSet_toyoshima)
router.register('coWorkingSpace/nakano', coWorkingViewSet_nakano)
router.register('coWorkingSpace/nerima', coWorkingViewSet_nerima)
router.register('coWorkingSpace/bunkyo', coWorkingViewSet_bunkyo)
router.register('coWorkingSpace/minato', coWorkingViewSet_minato)
router.register('coWorkingSpace/meguro', coWorkingViewSet_meguro)
router.register('coWorkingSpace/others', coWorkingViewSet_others)
router.register('coWorkingSpace/wifi', coWorkingViewSet_wifi)
router.register('coWorkingSpace/low_cost', coWorkingViewSet_low_cost)
router.register('coWorkingSpace/meeting_room', coWorkingViewSet_meeting_room)
router.register('coWorkingSpace/enhanced_options', coWorkingViewSet_enhanced_options)
router.register('coWorkingSpace/dropIn', coWorkingViewSet_dropin)
router.register('coWorkingSpace/_price_all', coWorkingViewSet_price_all)
router.register('coWorkingSpace/_price_10000', coWorkingViewSet_price_10000)
router.register('coWorkingSpace/_price_30000', coWorkingViewSet_price_30000)
router.register('coWorkingSpace/_price_50000', coWorkingViewSet_price_50000)
router.register('coWorkingSpace/_price_infty', coWorkingViewSet_price_infty)
router.register('coWorkingSpace/monthly_price_all', coWorkingViewSet_price_all)
router.register('coWorkingSpace/monthly_price_10000', coWorkingViewSet_price_10000)
router.register('coWorkingSpace/monthly_price_30000', coWorkingViewSet_price_30000)
router.register('coWorkingSpace/monthly_price_50000', coWorkingViewSet_price_50000)
router.register('coWorkingSpace/monthly_price_infty', coWorkingViewSet_price_infty)
router.register('coWorkingSpace/dropIn_1day_price_all', coWorkingViewSet_dropIn_1day_price_all)
router.register('coWorkingSpace/dropIn_1day_price_2000', coWorkingViewSet_dropIn_1day_price_2000)
router.register('coWorkingSpace/dropIn_1day_price_3000', coWorkingViewSet_dropIn_1day_price_3000)
router.register('coWorkingSpace/dropIn_1day_price_4000', coWorkingViewSet_dropIn_1day_price_4000)
router.register('coWorkingSpace/dropIn_1day_price_infty', coWorkingViewSet_dropIn_1day_price_infty)
router.register('coWorkingSpace/dropIn_1hour_price_all', coWorkingViewSet_dropIn_1hour_price_all)
router.register('coWorkingSpace/dropIn_1hour_price_500', coWorkingViewSet_dropIn_1hour_price_500)
router.register('coWorkingSpace/dropIn_1hour_price_600', coWorkingViewSet_dropIn_1hour_price_600)
router.register('coWorkingSpace/dropIn_1hour_price_700', coWorkingViewSet_dropIn_1hour_price_700)
router.register('coWorkingSpace/dropIn_1hour_price_infty', coWorkingViewSet_dropIn_1hour_price_infty)

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
  path('diagnose/',  views.diagnose),
  # path('coupon/shibuya', views.coupon, name='coupon'),
  # path('coupon/shinjuku', views.coupon, name='coupon'),
  # path('coupon/ikebukuro', views.coupon, name='coupon'),
  # path('coupon/tokyo', views.coupon, name='coupon'),
  # path('coupon/shinagawa', views.coupon, name='coupon'),
  # path('coupon/others', views.coupon, name='coupon'),
]