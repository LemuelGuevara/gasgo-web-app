type Station = {
  stations?: (StationsEntity)[] | null;
}
type StationsEntity = {
  business_status: string;
  opening_hours: OpeningHours;
  location: Location;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  photos?: (PhotosEntity | null)[] | null;
  place_id: string;
  rating: number;
  reference: string;
  scope: string;
  types?: (string)[] | null;
  user_ratings_total: number;
  vicinity: string;
}
type OpeningHours = {
  open_now: boolean;
}
type Location = {
  lat: number;
  lng: number;
}
type PhotosEntity = {
  height: number;
  html_attributions?: (string)[] | null;
  photo_reference: string;
  width: number;
}
