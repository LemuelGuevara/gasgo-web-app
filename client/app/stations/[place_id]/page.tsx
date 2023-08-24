import { StationCard } from "@/components/cards/StationCard";
import getStation from "@/utils/getStation";
import { notFound } from "next/navigation";
import React from "react";
import { InfoSideCard } from './components/InfoSideCard';
// import { StationDetails } from "@/interface/stationInfo";

type Props = {
  params: {
    place_id: string;
  };
};

export default async function PageID({ params: { place_id } }: Props) {
  const stationData: Promise<Station> = getStation(place_id);
  const station = await stationData;

  return (
    <div>
        <InfoSideCard place_id={place_id} stationInfo={station.station} />
    </div>
  );
}
