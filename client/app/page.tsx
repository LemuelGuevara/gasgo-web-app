import getStations from "@/utils/getAllStations";
import { StationsList } from "./stations/components/StationsList";
import Map from "@/components/map/Map";

export default async function Home() {
  const stationData: Promise<Station> = getStations();
  const station = await stationData;
  console.log(station)

  return (
    <div>
      {/* <StationsList results={station.results} /> */}

      <Map stationInstance={station}/>
    </div>
  );
}
