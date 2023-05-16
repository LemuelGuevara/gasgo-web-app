import { styled } from "@mui/system";
import { Input } from "@mui/joy";

export const RoundedInput = styled(Input)({
  borderRadius: "24px",
  color: "black",
  backgroundColor: "white",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  "&:hover": {
    backgroundColor: "white",
  },
});
