import { StationsList } from "./components/StationsList";
import getStations from "@/utils/getAllStations";
import { DirectionsCard } from "./components/DirectionsCard";

export default async function Stations() {
  // const stationData: Promise<Station> = getStations(50000);
  // const station = await stationData;

  return (
    <div>
        <DirectionsCard />
    </div>
  );
}
