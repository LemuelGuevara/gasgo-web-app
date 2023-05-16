from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.  

class Location(models.Model):
    lat = models.FloatField()
    lng = models.FloatField()

class Viewport(models.Model):
    northeast = models.OneToOneField(Location, on_delete=models.CASCADE, related_name='northeast')
    southwest = models.OneToOneField(Location, on_delete=models.CASCADE, related_name='southwest')

class Geometry(models.Model):
    location = models.OneToOneField(Location, on_delete=models.CASCADE)
    viewport = models.OneToOneField(Viewport, on_delete=models.CASCADE)

class Photo(models.Model):
    height = models.IntegerField()
    html_attributions = ArrayField(models.CharField(max_length=200))
    photo_reference = models.CharField(max_length=500)
    width = models.IntegerField()

class Place(models.Model):
    business_status = models.CharField(max_length=50)
    geometry = models.OneToOneField(Geometry, on_delete=models.CASCADE)
    icon = models.URLField()
    icon_background_color = models.CharField(max_length=10)
    icon_mask_base_uri = models.URLField()
    name = models.CharField(max_length=100)
    photos = models.ManyToManyField(Photo)
    place_id = models.CharField(max_length=50)
    rating = models.FloatField()
    reference = models.CharField(max_length=50)
    scope = models.CharField(max_length=50)
    types = ArrayField(models.CharField(max_length=50))
    user_ratings_total = models.IntegerField()
    vicinity = models.CharField(max_length=100)
