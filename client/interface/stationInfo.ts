export interface StationDetails {
  station: StationAttributes;
}
export interface StationAttributes {
  business_status: string;
  opening_hours: OpeningHours;
  location: Location;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  photos?: PhotosEntity[] | null;
  place_id: string;
  rating: number;
  reference: string;
  scope: string;
  types?: string[] | null;
  user_ratings_total: number;
  vicinity: string;
}
export interface OpeningHours {
  open_now: boolean;
}
export interface Location {
  lat: number;
  lng: number;
}
export interface PhotosEntity {
  height: number;
  html_attributions?: string[] | null;
  photo_reference: string;
  width: number;
}
