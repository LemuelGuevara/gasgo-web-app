from rest_framework import serializers
from .models import Location, Viewport, Geometry, Photo, Place, OpeningHours


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ["lat", "lng"]


class ViewportSerializer(serializers.ModelSerializer):
    northeast = LocationSerializer()
    southwest = LocationSerializer()

    class Meta:
        model = Viewport
        fields = ["northeast", "southwest"]


class GeometrySerializer(serializers.ModelSerializer):
    location = LocationSerializer()
    viewport = ViewportSerializer()

    class Meta:
        model = Geometry
        fields = ["location", "viewport"]


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ["height", "html_attributions", "photo_reference", "width"]


class OpeningHoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = OpeningHours
        fields = ["open_now"]


class StationSerializer(serializers.ModelSerializer):
    location = LocationSerializer(source="geometry.location")
    photos = PhotoSerializer(many=True)
    opening_hours = OpeningHoursSerializer()

    class Meta:
        model = Place
        fields = [
            "business_status",
            "opening_hours",
            "location",
            "icon",
            "icon_background_color",
            "icon_mask_base_uri",
            "name",
            "photos",
            "place_id",
            "rating",
            "reference",
            "scope",
            "types",
            "user_ratings_total",
            "vicinity",
        ]
