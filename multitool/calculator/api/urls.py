
from django.urls import path
from .views import CalculatorApi


urlpatterns = [
    path('', CalculatorApi.as_view(), name="calculatorApi"),
]
