"use client";

import { CustomCard } from "@/components/cards/CustomCard";
import { AspectRatio } from "@mui/joy";
import Image from "next/image";
import MapDetails from "@/components/map/MapDetails";


type InfoMapCardProps = {
  stationMap?: Station;
}

export const InfoMapCard: React.FC<InfoMapCardProps> = (props) => {
  return (
    <>
      <CustomCard
        width="100%"
        height="650px"
        backgroundColor="#F9FAFB"
        boxShadow="md"
        borderRadius="lg"
      >
        <AspectRatio
          ratio={1}
          minHeight="120px"
          maxHeight="610px"
          sx={{ my: 2, p: "0rem 2%", borderRadius: "lg" }}
        >
          {/* <MapDetails stationInstance={props.stationMap}/> */}
          <Image src="/GasGo-map.png" alt="" width={1080} height={1080} />
        </AspectRatio>
      </CustomCard>
    </>
  );
};
