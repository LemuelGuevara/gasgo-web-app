import { StationsType } from "./StationTypes";

export async function getStations() {
  try {
    const response = await fetch("http://localhost:3000/api/stations");
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    const data: StationsType = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}
