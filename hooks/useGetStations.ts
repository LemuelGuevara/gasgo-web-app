import { getStations } from "@/utils/getStations";
import { useState, useEffect } from "react";

export default function useGetStations() {
  const [stations, setStations] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getStations();
      setStations(data);
    }
    fetchData();
    const interval = setInterval(fetchData, 3600 * 100); // update every hour
    return () => clearInterval(interval); // cleanup interval on unmount
  }, []);

  return [stations, setStations];
}
