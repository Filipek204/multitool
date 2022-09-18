
from django.urls import path
from .views import calculatorView


urlpatterns = [
    path('calculator/', calculatorView, name="calculator"),
]
