import BookmarkAdd from "@mui/icons-material/BookmarkAdd";
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/joy";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FlexBox } from "../styled/Box/Flex";

interface StationProps {
  name: string;
  address: any;
  opened: boolean;
  price: number;
  distance: number;
  id: string;
  mediaQuery: boolean;
  stationObject?: StationDetails;
}

function showStation(props: Station) {
  console.log(props.stations);
}

export const StationCard: React.FC<StationProps> = (props) => {
  const openedColor = props.opened ? "green" : "red";
  const openedText = props.opened ? "Opened now" : "Closed now";
  const router = useRouter();
  const cardWidth = props.mediaQuery ? 270 : 300;
  const cardHeight = props.mediaQuery ? 315 : 350;

  return (
    <div>
      <Box>
        <Card
          variant="outlined"
          sx={{
            width: cardWidth,
            height: cardHeight,
            boxShadow: "md",
            cursor: "pointer",
            "&:hover": {
              boxShadow: "lg",
              transition: `200ms ease-in-out`,
            },
          }}
        >
          <FlexBox gap={1.5} width={"100%"} justifyContent="flex-start">
            <Chip
              size="md"
              variant="soft"
              sx={{
                flexGrow: 0,
                color: "primary.300",
                backgroundColor: "primary.50",
              }}
            >
              PHP {props.price}
            </Chip>
            <Chip
              size="md"
              variant="soft"
              sx={{
                flexGrow: 0,
                color: "neutral.500",
                backgroundColor: "neutral.50",
              }}
            >
              {props.distance} KM
            </Chip>
            <IconButton
              variant="plain"
              color="primary"
              size="sm"
              sx={{ position: "absolute", top: "1rem", right: "0.8rem" }}
              onClick={() => console.log(props.stationObject)}
            >
              <BookmarkAdd sx={{ color: "primary.400" }} />
            </IconButton>
          </FlexBox>
          <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
            <Image
              src="/GasGo-Banner.svg"
              loading="lazy"
              alt=""
              width={120}
              height={120}
              onClick={() => router.push(`/stations/${props.id}`)}
            />
          </AspectRatio>
          <Typography
            noWrap
            level="titleLarge"
            fontWeight={700}
            sx={{ ml: 1.5 }}
          >
            {props.name}
          </Typography>
          <Stack pt={0.5} gap={0.5}>
            <Typography
              noWrap
              level="titleMedium"
              fontWeight={400}
              textColor="text.tertiary"
              sx={{ ml: 1.5 }}
            >
              {props.address}
            </Typography>
            <Typography
              level="labelLarge"
              fontWeight={400}
              sx={{ ml: 1.5 }}
              textColor={openedColor}
            >
              {openedText}
            </Typography>
          </Stack>
        </Card>
      </Box>
    </div>
  );
};
