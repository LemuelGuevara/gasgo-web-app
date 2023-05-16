import { Button, Box } from "@mui/joy";
import { styled } from "@mui/system";

export const RoundedButton = styled(Button) ({
    borderRadius: "24px",
    color: "black",
    backgroundColor: "white",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    "&:hover": {
      backgroundColor: "white"
    }
})

export const RoundedButtonGroup = styled(Box)({
  borderRadius: "24px",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
});


