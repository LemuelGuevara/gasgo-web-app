import json
from tqdm import tqdm as tq

from stations_app.models import Place, Geometry, Location, Viewport, Photo

default_value = 0

with open("stations.json", "r") as f:
    data = json.load(f)

for item in tq(data):
    location = Location.objects.create(
        lat=item["geometry"]["location"]["lat"], lng=item["geometry"]["location"]["lng"]
    )
    northeast = Location.objects.create(
        lat=item["geometry"]["viewport"]["northeast"]["lat"],
        lng=item["geometry"]["viewport"]["northeast"]["lng"],
    )
    southwest = Location.objects.create(
        lat=item["geometry"]["viewport"]["southwest"]["lat"],
        lng=item["geometry"]["viewport"]["southwest"]["lng"],
    )
    viewport = Viewport.objects.create(northeast=northeast, southwest=southwest)
    geometry = Geometry.objects.create(location=location, viewport=viewport)
    place = Place.objects.create(
        business_status=item["business_status"],
        geometry=geometry,
        icon=item["icon"],
        icon_background_color=item["icon_background_color"],
        icon_mask_base_uri=item["icon_mask_base_uri"],
        name=item["name"],
        place_id=item["place_id"],
        rating=item.get("rating", default_value),
        reference=item["reference"],
        scope=item["scope"],
        types=item["types"],
        user_ratings_total=item.get("user_ratings_total", default_value),
        vicinity=item["vicinity"],
    )
    if "photos" in item:
        for photo_data in item["photos"]:
            photo = Photo.objects.create(
                height=photo_data["height"],
                html_attributions=photo_data["html_attributions"],
                photo_reference=photo_data["photo_reference"],
                width=photo_data["width"],
            )
            place.photos.add(photo)
