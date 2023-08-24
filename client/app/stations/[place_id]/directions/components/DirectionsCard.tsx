"use client";

import { CustomCard } from "@/components/cards/CustomCard";
import { CircleIcon } from "@/components/styled/Box/CircleIcon";
import { FlexBox } from "@/components/styled/Box/Flex";
import StraightRoundedIcon from "@mui/icons-material/StraightRounded";
import TurnRightRoundedIcon from "@mui/icons-material/TurnRightRounded";
import SportsScoreRoundedIcon from "@mui/icons-material/SportsScoreRounded";
import { Box, Divider, Typography } from "@mui/joy";
import { useRouter } from "next/navigation";
import React from "react";
import { InfoButton, InfoStack } from "../../components/InfoComponents";

interface InfoStationProps {
  place_id?: string;
}

interface DirectionProps {
  heading: string;
  distance: string;
  icon: any;
  pt?: number;
}

const Direction: React.FC<DirectionProps> = (props) => {
  return (
    <FlexBox>
      <InfoStack
        justifyContent="flext-start"
        alignItems="center"
        direction="row"
        gap={2}
        p={3}
        pt={props.pt}
        border="1px solid"
        borderColor="divider"
      >
        <FlexBox display="inline-flex">
          <CircleIcon
            sx={{
              backgroundColor: "primary.300",
              color: "white",
              width: 50,
              height: 50,
            }}
          >
            {props.icon}
          </CircleIcon>
        </FlexBox>
        <InfoStack direction="column" gap={0.5}>
          <Typography fontWeight={500} level="titleMedium">
            {props.heading}
          </Typography>
          <Typography
            noWrap
            fontWeight={500}
            level="titleSmall"
            textColor="text.tertiary"
          >
            {props.distance}
          </Typography>
        </InfoStack>
      </InfoStack>
    </FlexBox>
  );
};

export const DirectionsCard: React.FC<InfoStationProps> = (props) => {
  const iconSize = 35;
  const router = useRouter();

  return (
    <>
      <CustomCard width="450px" height="650px" boxShadow="md" borderRadius="lg">
        <Box p={3}>
          <InfoStack pr={2} pl={3}>
            <Typography level="titleLarge" fontWeight={500}>
              31 min
              <Typography pl={1} textColor="text.tertiary" level="titleMedium">
                (2.5) km
              </Typography>
            </Typography>
            <Typography textColor="text.tertiary" level="titleSmall">
              via Village East Avenue
            </Typography>
          </InfoStack>
          <InfoStack gap={2}>
            <Direction
              heading={"Head west on Jaguar toward Quantum"}
              distance={"500m"}
              icon={<StraightRoundedIcon sx={{ fontSize: iconSize }} />}
            />
            <Direction
              heading={"Turn right onto Village East Avenue"}
              distance={"1.5 km"}
              icon={<TurnRightRoundedIcon sx={{ fontSize: iconSize }} />}
            />
            <Direction
              heading={"Turn right onto Felix Avenue"}
              distance={"450 m"}
              icon={<TurnRightRoundedIcon sx={{ fontSize: iconSize }} />}
            />
            <Direction
              heading={"Caltex"}
              distance={"5 Felix Avenue, Sto Domingo"}
              icon={<SportsScoreRoundedIcon sx={{ fontSize: iconSize }} />}
            />
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
        </Box>
      </CustomCard>
    </>
  );
};
