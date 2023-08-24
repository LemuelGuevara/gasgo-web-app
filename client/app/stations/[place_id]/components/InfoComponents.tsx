import { FlexBox } from "@/components/styled/Box/Flex";
import { RoundedButton } from "@/components/styled/Button/Rounded";
import { Stack } from "@mui/joy";
import { useRouter } from "next/navigation";

interface InfoComponentProps {
  justifyContent?: string;
  alignItems?: string;
  direction?: "row" | "column";
  gap?: number;
  children?: React.ReactNode;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  width?: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: "solid" | "soft" | "outlined" | "plain";
  hoverBgColor?: string;
  startIcon?: any;
  toRoute?: string;
  onClick?: () => void;
  borderRadius?: string;
  boxShadow?: string;
  border?: string;
  borderColor?: string;
}

export const InfoButton: React.FC<InfoComponentProps> = (props) => {
  const router = useRouter();
  return (
    <RoundedButton
      onClick={props.onClick}
      variant={props.variant}
      startDecorator={props.startIcon}
      sx={{
        width: props.width,
        flex: "inline-flex",
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        "&:hover": {
          backgroundColor: props.hoverBgColor,
          transition: `200´ms ease-in-out`,
        },
      }}
    >
      {props.children}
    </RoundedButton>
  );
};

export const InfoStack: React.FC<InfoComponentProps> = (props) => {
  return (
    <FlexBox
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      width="100%"
      p={props.p}
      pt={props.pt}
      pb={props.pb}
      display="inline-flex"
    >
      <Stack
        alignItems={props.alignItems}
        direction={props.direction}
        gap={props.gap}
        width={props.width}
        pl={props.pl}
        pr={props.pr}
        sx={{backgroundColor: props.backgroundColor}} 
      >
        {props.children}
      </Stack>
    </FlexBox>
  );
};
