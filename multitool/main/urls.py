from django.urls import path, include
from .views import mainView

urlpatterns = [
    path('home/', mainView, name="main"),
    path('', include("calculator.urls")),
    path('api/', include ("calculator.api.urls") )
]
