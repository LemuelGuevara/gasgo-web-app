"use client";

import { CustomCard } from "@/components/cards/CustomCard";
import { FlexBox } from "@/components/styled/Box/Flex";
import CircleIcon from "@mui/icons-material/Circle";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import { AspectRatio, Divider, Stack, Typography } from "@mui/joy";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GetAddress, getRandomInt } from "../../Helpers";
import { InfoButton, InfoStack } from "./InfoComponents";
import { formatAddress } from "@/utils/parsers";

interface InfoStationProps {
  place_id?: string;
  stationInfo: StationDetails;
}

export const InfoSideCard: React.FC<InfoStationProps> = ({ stationInfo }) => {
  const openedColor = stationInfo.opening_hours.open_now ? "green" : "red";
  const openedText = stationInfo.opening_hours.open_now
    ? "Opened now"
    : "Closed now";
  const iconSize = 8;
  const router = useRouter();
  const [price, setPrice] = useState(0);
  useEffect(() => setPrice(getRandomInt(50, 65)), []);
  const [distance, setDistance] = useState(0);
  useEffect(() => setDistance(getRandomInt(2, 15)), []);
  const [time, setTime] = useState(0);
  useEffect(() => setTime(getRandomInt(5, 25)), []);

  return (
    <div>
      <CustomCard
        width="370px"
        height="650px"
        backgroundColor="#F9FAFB"
        boxShadow="md"
        borderRadius="lg"
      >
        <AspectRatio
          ratio={1}
          minHeight="120px"
          maxHeight="200px"
          sx={{ my: 2, p: "0rem 5%", borderRadius: "lg" }}
        >
          <Image
            src="/GasGo-Banner.svg"
            loading="lazy"
            alt=""
            width={120}
            height={120}
          />
        </AspectRatio>
        <InfoStack
          gap={1}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography level="headlineMedium" fontWeight={700}>
            {stationInfo.name}
          </Typography>
          <Typography level="titleMedium" textColor="text.tertiary">
            {/* <GetAddress
              lat={stationInfo.station.location.lat}
              lng={stationInfo.station.location.lng}
            /> */}
            Test Address
          </Typography>
        </InfoStack>
        {/* <Divider sx={{ m: 2 }} /> */}
        <InfoStack
          gap={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          pt={2}
        >
          <Typography
            level="titleSmall"
            fontWeight={700}
            textColor="primary.300"
          >
            PHP {price}
          </Typography>
          <CircleIcon sx={{ fontSize: iconSize, color: "text.tertiary" }} />
          <Typography level="titleSmall" textColor={openedColor}>
            {openedText}
          </Typography>
          <CircleIcon sx={{ fontSize: iconSize, color: "text.tertiary" }} />
          <Typography level="titleSmall" textColor="text.tertiary">
            24 Hours
          </Typography>
        </InfoStack>
        <Divider sx={{ m: 2 }} />
        <InfoStack
          pt={2}
          pb={2}
          justifyContent="center"
          alignItems="center"
          gap={2}
          direction="row"
        >
          <InfoButton
            variant="soft"
            backgroundColor="primary.50"
            textColor="primary.300"
            hoverBgColor="primary.100"
            startIcon={<RouteRoundedIcon />}
            onClick={() =>
              router.push(`/stations/${stationInfo.place_id}/directions`)
            }
          >
            Directions
          </InfoButton>
          <InfoButton
            variant="soft"
            backgroundColor="primary.50"
            textColor="primary.300"
            hoverBgColor="primary.100"
            startIcon={<TurnedInNotRoundedIcon />}
            onClick={() => console.log(stationInfo)}
          >
            Add to favorites
          </InfoButton>
        </InfoStack>
        <Divider sx={{ m: 2 }} />
        <InfoStack
          pt={2}
          justifyContent="center"
          alignItems="center"
          gap={2}
          direction="row"
        >
          <Typography level="titleSmall" fontWeight={700}>
            {time} mins
          </Typography>
          <CircleIcon sx={{ fontSize: iconSize, color: "text.tertiary" }} />
          <Typography level="titleSmall" textColor="text.tertiary">
            {distance} km
          </Typography>
        </InfoStack>
        <InfoStack
          pt={2}
          gap={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography level="titleSmall" textColor="text.tertiary">
            <Stack direction="row" gap={1}>
              <FlexBox>
                <NearMeRoundedIcon
                  sx={{ fontSize: 15, color: "primary.300" }}
                />
              </FlexBox>
              via Felix Avenue, Cainta Rizal
            </Stack>
          </Typography>
        </InfoStack>
        <InfoStack
          pt={3}
          justifyContent="center"
          alignItems="center"
          gap={2}
          pl={4}
          pr={4}
          direction="row"
          width="100%"
        >
          <InfoButton
            backgroundColor="neutral.50"
            width="100%"
            variant="soft"
            textColor="neutral.500"
            hoverBgColor="neutral.100"
            onClick={() => router.back()}
          >
            Go back
          </InfoButton>
          <InfoButton
            textColor="white"
            backgroundColor="primary.300"
            width="100%"
            hoverBgColor="primary.400"
          >
            Go now
          </InfoButton>
        </InfoStack>
      </CustomCard>
    </div>
  );
};
