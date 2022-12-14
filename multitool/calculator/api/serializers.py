from rest_framework import serializers
from ..models import Button


class ButtonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Button
        fields = ['number', 'signs', 'equals_sign']
