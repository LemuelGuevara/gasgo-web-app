import { Box } from "@mui/joy";

interface CustomCardProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  boxShadow?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

export const CustomCard: React.FC<CustomCardProps> = (props) => {
  return (
    <Box
      border="1px solid"
      borderColor="divider"
      width={props.width}
      flexGrow={1}
      sx={{
        height: props.height,
        padding: props.padding,
        margin: props.margin,
        borderRadius: props.borderRadius,
        boxShadow: props.boxShadow,
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.children}
    </Box>
  );
};
