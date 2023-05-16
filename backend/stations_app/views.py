from django.views import View
from .models import Place
from django.http import JsonResponse
from rest_framework.response import Response
from .serializers import StationSerializer
from rest_framework import status


# Create your views here.
class StationList(View):
    def get(self, request, format=None):
        stations = Place.objects.all()
        serializer = StationSerializer(stations, many=True)
        return JsonResponse({"stations": serializer.data})


class StationDetail(View):
    def get(self, request, place_id, format=None,):
        station = Place.objects.get(place_id=place_id)
        serializer = StationSerializer(station)
        return JsonResponse({"station": serializer.data})