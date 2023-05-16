import getStations from "@/utils/getAllStations";
import { StationsList } from "./stations/components/StationsList";

export default async function Home() {
  // const stationData: Promise<Station> = getStations(50000);
  // const station = await stationData;

  return (
    <div>
      {/* <StationsList results={station.results} /> */}
    </div>
  );
}
