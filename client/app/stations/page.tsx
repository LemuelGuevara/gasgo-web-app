import { StationsList } from "./components/StationsList";
import getStations from "@/utils/getAllStations";

export default async function Stations() {
  // const stationData: Promise<Station> = getStations(50000);
  // const station = await stationData;

  const stationData: Promise<Station> = getStations();
  const stations = await stationData;

  return (
    <div>
      <StationsList stations={stations}/>
    </div>
  );
}
