from rest_framework import serializers

from .models import coWorkingSpace, review

class coWorkingSpaceSerializer(serializers.ModelSerializer):
  class Meta:
    model = coWorkingSpace
    fields = '__all__'

class lineSerializer(serializers.Serializer):
  access_token = serializers.CharField()
  expires_in = serializers.IntegerField()
  id_token = serializers.CharField()
  refresh_token = serializers.CharField()
  scope = serializers.CharField()
  token_type = serializers.CharField()
  def get_user(self, instance):
    request = self.context.get('request')
    return True

class reviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = review
    fields = '__all__'
  def getSpaceName(self, instance):
    return instance.getSpaceName()