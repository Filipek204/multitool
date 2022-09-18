from rest_framework import generics
from ..models import Button
from .serializers import ButtonSerializer

class CalculatorApi(generics.ListCreateAPIView):
    queryset = Button.objects.all()
    serializer_class = ButtonSerializer
