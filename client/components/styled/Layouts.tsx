"use client";

import { Box, Stack } from "@mui/joy";
import { InfoMapCard } from "@/app/stations/[place_id]/components/InfoMapCard";

type Props = {
  children: React.ReactNode;
  padding?: string;
};

function Header({ children }: Props) {
  return (
    <Box
      sx={{
        p: "0rem 4%",
        borderBottom: "1px solid",
        borderColor: "divider",
        position: "sticky",
      }}
    >
      {children}
    </Box>
  );
}

function MobileHeader({ children }: Props) {
  return (
    <Box sx={{ p: "0rem 4%", position: "sticky", zIndex: 9999 }}>
      {children}
    </Box>
  );
}

function Root({ children }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }} p="2rem 2%" position="sticky">
      {children}
    </Box>
  );
}

function StationDetailsContainer({ children }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }} p="4rem 2%" position="sticky">
      <Stack direction="row" gap={2}>
        {/* Left Side */}
        {children}
        {/* Left Side */}
      </Stack>
    </Box>
  );
}

export { Header, MobileHeader, Root, StationDetailsContainer };
