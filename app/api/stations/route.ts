import { StationType } from "@/utils/StationTypes";
import { NextResponse } from "next/server";

export async function GET() {
  const latitude = 14.390848002817007;
  const longitude = 121.26805882750686;
  const radius = 50000;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=gas_station&key=${apiKey}`,
    { next: { revalidate: 60 } }
  );
  const stations: StationType[] = await res.json();

  return NextResponse.json(stations);
}
