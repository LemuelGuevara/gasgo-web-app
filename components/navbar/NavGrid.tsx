import { Box } from "@mui/joy";
import React from "react";

type Props = {
  props: React.ReactNode;
};

function NavGrid({ props }: Props) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gridTemplateRows="80px 80px"
      gap={0}
    >
      {props}
    </Box>
  );
}

export default NavGrid;