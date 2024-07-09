from django.urls import path
from rest_framework import routers
from .views import coWorkingViewSet_adachi, coWorkingViewSet_arakawa, coWorkingViewSet_itabashi, coWorkingViewSet_edogawa, coWorkingViewSet_ota, coWorkingViewSet_katsushika, coWorkingViewSet_kita, coWorkingViewSet_koutou, coWorkingViewSet_shinagawa, coWorkingViewSet_shibuya, coWorkingViewSet_shinjuku, coWorkingViewSet_suginami, coWorkingViewSet_sumida, coWorkingViewSet_setagaya, coWorkingViewSet_taito, coWorkingViewSet_chuo, coWorkingViewSet_chiyoda,coWorkingViewSet_toyoshima, coWorkingViewSet_nakano,coWorkingViewSet_nerima,coWorkingViewSet_bunkyo, coWorkingViewSet_minato, coWorkingViewSet_meguro, coWorkingViewSet_others, coWorkingViewSet, coWorkingViewSet_wifi, coWorkingViewSet_low_cost, coWorkingViewSet_meeting_room, coWorkingViewSet_enhanced_options, coWorkingViewSet_dropin,coWorkingViewSet_all_time ,reviewViewSet,coWorkingViewSet_price_all, coWorkingViewSet_price_10000, coWorkingViewSet_price_30000, coWorkingViewSet_price_50000, coWorkingViewSet_price_infty, coWorkingViewSet_dropIn_1day_price_all, coWorkingViewSet_dropIn_1day_price_2000, coWorkingViewSet_dropIn_1day_price_3000, coWorkingViewSet_dropIn_1day_price_4000, coWorkingViewSet_dropIn_1day_price_infty, coWorkingViewSet_dropIn_1hour_price_all,coWorkingViewSet_dropIn_1hour_price_500, coWorkingViewSet_dropIn_1hour_price_600, coWorkingViewSet_dropIn_1hour_price_700, coWorkingViewSet_dropIn_1hour_price_infty
from . import views
from .views import favorite_data_view

router = routers.DefaultRouter()
router.register('coWorkingSpace/all', coWorkingViewSet)
router.register('coWorkingSpace/adachi', coWorkingViewSet_adachi, basename="coWorkingSpaceAdachi")
router.register('coWorkingSpace/arakawa', coWorkingViewSet_arakawa, basename="coWorkingSpaceArakawa")
router.register('coWorkingSpace/itabashi', coWorkingViewSet_itabashi, basename="coWorkingSpaceItabashi")
router.register('coWorkingSpace/edogawa', coWorkingViewSet_edogawa, basename="coWorkingSpaceEdogawa")
router.register('coWorkingSpace/ota', coWorkingViewSet_ota, basename="coWorkingSpaceOta")
router.register('coWorkingSpace/katsushika', coWorkingViewSet_katsushika, basename="coWorkingSpaceKatsushika")
router.register('coWorkingSpace/kita', coWorkingViewSet_kita, basename="coWorkingSpaceKita")
router.register('coWorkingSpace/koutou', coWorkingViewSet_koutou, basename="coWorkingSpaceKouhoku")
router.register('coWorkingSpace/shinagawa', coWorkingViewSet_shinagawa, basename="coWorkingSpaceShinagawa")
router.register('coWorkingSpace/shibuya', coWorkingViewSet_shibuya, basename="coWorkingSpaceShibuya")
router.register('coWorkingSpace/shinjuku', coWorkingViewSet_shinjuku, basename="coWorkingSpaceShinjuku")
router.register('coWorkingSpace/suginami', coWorkingViewSet_suginami, basename="coWorkingSpaceSuginami")
router.register('coWorkingSpace/sumida', coWorkingViewSet_sumida, basename="coWorkingSpaceSumida")
router.register('coWorkingSpace/setagaya', coWorkingViewSet_setagaya, basename="coWorkingSpaceSetagaya")
router.register('coWorkingSpace/taito', coWorkingViewSet_taito, basename="coWorkingSpaceTaito")
router.register('coWorkingSpace/chuo', coWorkingViewSet_chuo, basename="coWorkingSpaceChuo")
router.register('coWorkingSpace/chiyoda', coWorkingViewSet_chiyoda, basename="coWorkingSpaceChiyoda")
router.register('coWorkingSpace/toyoshima', coWorkingViewSet_toyoshima, basename="coWorkingSpaceToyoshima")
router.register('coWorkingSpace/nakano', coWorkingViewSet_nakano, basename="coWorkingSpaceNakano")
router.register('coWorkingSpace/nerima', coWorkingViewSet_nerima, basename="coWorkingSpaceNerima")
router.register('coWorkingSpace/bunkyo', coWorkingViewSet_bunkyo, basename="coWorkingSpaceBunkyo")
router.register('coWorkingSpace/minato', coWorkingViewSet_minato, basename="coWorkingSpaceMinato")
router.register('coWorkingSpace/meguro', coWorkingViewSet_meguro, basename="coWorkingSpaceMeguro")
router.register('coWorkingSpace/others', coWorkingViewSet_others, basename="coWorkingSpaceOthers")
router.register('coWorkingSpace/wifi', coWorkingViewSet_wifi, basename="coWorkingSpaceWifi")
router.register('coWorkingSpace/low_cost', coWorkingViewSet_low_cost, basename="coWorkingSpaceLowCost")
router.register('coWorkingSpace/meeting_room', coWorkingViewSet_meeting_room, basename="coWorkingSpaceMeetingRoom")
router.register('coWorkingSpace/enhanced_options', coWorkingViewSet_enhanced_options, basename="coWorkingSpaceOptions")
router.register('coWorkingSpace/dropIn', coWorkingViewSet_dropin, basename="coWorkingSpaceDropin")
router.register('coWorkingSpace/_price_all', coWorkingViewSet_price_all, basename="coWorkingSpacePriceAll")
router.register('coWorkingSpace/_price_10000', coWorkingViewSet_price_10000, basename="coWorkingSpacePrice10000")
router.register('coWorkingSpace/_price_30000', coWorkingViewSet_price_30000, basename="coWorkingSpacePrice30000")
router.register('coWorkingSpace/_price_50000', coWorkingViewSet_price_50000, basename="coWorkingSpacePrice50000")
router.register('coWorkingSpace/_price_infty', coWorkingViewSet_price_infty, basename="coWorkingSpacePriceInfty")
router.register('coWorkingSpace/monthly_price_all', coWorkingViewSet_price_all, basename="coWorkingSpacePriceAllMonth")
router.register('coWorkingSpace/monthly_price_10000', coWorkingViewSet_price_10000, basename="coWorkingSpacePrice10000Month")
router.register('coWorkingSpace/monthly_price_30000', coWorkingViewSet_price_30000, basename="coWorkingSpacePrice30000Month")
router.register('coWorkingSpace/monthly_price_50000', coWorkingViewSet_price_50000, basename="coWorkingSpacePrice50000Month")
router.register('coWorkingSpace/monthly_price_infty', coWorkingViewSet_price_infty, basename="coWorkingSpacePriceInftyMonth")
router.register('coWorkingSpace/dropIn_1day_price_all', coWorkingViewSet_dropIn_1day_price_all, basename="coWorkingSpacePriceAllAday")
router.register('coWorkingSpace/dropIn_1day_price_2000', coWorkingViewSet_dropIn_1day_price_2000, basename="coWorkingSpacePrice2000Aday")
router.register('coWorkingSpace/dropIn_1day_price_3000', coWorkingViewSet_dropIn_1day_price_3000, basename="coWorkingSpacePrice3000Aday")
router.register('coWorkingSpace/dropIn_1day_price_4000', coWorkingViewSet_dropIn_1day_price_4000, basename="coWorkingSpacePrice4000Aday")
router.register('coWorkingSpace/dropIn_1day_price_infty', coWorkingViewSet_dropIn_1day_price_infty, basename="coWorkingSpacePriceInftyAday")
router.register('coWorkingSpace/dropIn_1hour_price_all', coWorkingViewSet_dropIn_1hour_price_all, basename="coWorkingSpacePriceAllAnhour")
router.register('coWorkingSpace/dropIn_1hour_price_500', coWorkingViewSet_dropIn_1hour_price_500, basename="coWorkingSpacePrice500Anhour")
router.register('coWorkingSpace/dropIn_1hour_price_600', coWorkingViewSet_dropIn_1hour_price_600, basename="coWorkingSpacePrice600Anhour")
router.register('coWorkingSpace/dropIn_1hour_price_700', coWorkingViewSet_dropIn_1hour_price_700, basename="coWorkingSpacePrice700Anhour")
router.register('coWorkingSpace/dropIn_1hour_price_infty', coWorkingViewSet_dropIn_1hour_price_infty, basename="coWorkingSpacePriceInftyAnhour")
router.register('coWorkingSpace/all_time', coWorkingViewSet_all_time, basename="coWorkingSpaceTimeAll")
router.register('coWorkingSpace/reviews', reviewViewSet, basename="coWorkingSpaceReviews")

urlpatterns = [
  path('line_api/<slug:code>/', views.getLineAccessToken, name='getLineAccessToken'),
  path('postReview/',  views.review_list),
  path('diagnose/',  views.diagnose),
  path('favorite-data/', favorite_data_view, name='favorite_data'),
]