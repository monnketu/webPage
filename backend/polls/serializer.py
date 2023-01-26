from rest_framework import serializers

from .models import coWorkingSpace

class coWorkingSpaceSerializer(serializers.ModelSerializer):
  class Meta:
    model = coWorkingSpace
    fields = ('spaceID', 
              'aria', 
              'name', 
              'address', 
              'station',
              'isMeetingRoom',
              'isDropIn',
              'startTime',
              'endTime',
              'jurisdiction'
              )


