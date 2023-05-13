"use client";

import Box from "@mui/joy/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavSearchBar } from "../navbar/NavSearchBar";
import FlexBox from "./Box/FlexBox";

type Props = {
  children: React.ReactNode;
};

function Header({ children }: Props) {
  return (
    <Box
      sx={{
        p: "0rem 6%",
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
  return <Box sx={{ p: "0rem 4%", position: "sticky" }}>{children}</Box>;
}

export { Header, MobileHeader};
