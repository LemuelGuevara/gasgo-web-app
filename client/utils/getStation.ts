export default async function getStation(placeId: string) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const googleAPI = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
  const djangoEndpoint = `http://127.0.0.1:8000/api/stations/${placeId}`

  const res = await fetch(djangoEndpoint,
    { next: { revalidate: 60 } }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
