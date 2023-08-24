import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `http://127.0.0.1:8000/stations`,
    { next: { revalidate: 60 } }
  );
  const stations = await res.json();
  return  NextResponse.json({stations});
}