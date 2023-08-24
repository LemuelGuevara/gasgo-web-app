from django.contrib import admin
from django.urls import path, include
from .views import StationList, StationDetail

urlpatterns = [
    path('stations/', StationList.as_view()),
    path('stations/<str:place_id>', StationDetail.as_view()),
]
