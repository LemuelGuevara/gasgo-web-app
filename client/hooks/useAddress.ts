import { useState, useEffect } from "react";

async function getAddressFromLatLng(lat: number, lng: number): Promise<any> {
  const apiKey = "AIzaSyBpBYNIlVWLEQxzpf_OedErY0fh_l6hkPY";
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
  );
  const data = await response.json();
  const addressComponents = data.results[0].address_components;
  const city = addressComponents.find((component: any) =>
    component.types.includes("locality")
  )?.long_name;
  const province = addressComponents.find((component: any) =>
    component.types.includes("administrative_area_level_1")
  )?.long_name;
  return `${city}, ${province}`;
}

export function useAddress(lat: number, lng: number) {
  const [address, setAddress] = useState<any>(null);

  useEffect(() => {
    async function fetchAddress() {
      const data = await getAddressFromLatLng(lat, lng);
      setAddress(data);
    }
    fetchAddress();
  }, [lat, lng]);

  return address;
}
