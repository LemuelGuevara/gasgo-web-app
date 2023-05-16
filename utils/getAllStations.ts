export default async function getStations(radius: number) {
  const latitude = 14.390848002817007;
  const longitude = 121.26805882750686;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=gas_station&key=${apiKey}`,
    {
      next: { revalidate: 60 },
    }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
