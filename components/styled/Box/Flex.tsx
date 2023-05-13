
import { Box } from "@mui/joy";
import { styled } from "@mui/system";

export const FlexBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const FlexBetween = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});
