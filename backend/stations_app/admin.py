from django.contrib import admin
from .models import Location, Viewport, Geometry, Photo, Place

# Register your models here.
admin.site.register(Location)
admin.site.register(Viewport)
admin.site.register(Geometry)
admin.site.register(Photo)
admin.site.register(Place)
