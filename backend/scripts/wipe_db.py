import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "gasgo_rest_api.settings")
django.setup()

from stations_app.models import Place, Location, Viewport, Geometry, Photo, OpeningHours

Place.objects.all().delete()
Location.objects.all().delete()
Viewport.objects.all().delete()
Geometry.objects.all().delete()
Photo.objects.all().delete()
OpeningHours.objects.all().delete()
