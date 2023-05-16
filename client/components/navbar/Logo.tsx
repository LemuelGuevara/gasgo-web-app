import { Box, Typography } from "@mui/joy";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";

interface LogoMediaQueryProps {
  mediaQuery?: boolean;
}

const Logo: React.FC<LogoMediaQueryProps> = (props) => {
  const router = useRouter();
  const isDesktopScreens = props.mediaQuery;
  const isFullLogo = isDesktopScreens
    ? "/GasGo-web-full.svg"
    : "/GasGo-web-solo.svg";
  const logoWidth = isDesktopScreens ? 80 : 32;
  const logoHeight = isDesktopScreens ? 80 : 32;

  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={0.5}
      alignItems="end"
      sx={{ cursor: "pointer" }}
    >
      <Image
        src={isFullLogo}
        width={logoWidth}
        height={logoHeight}
        alt="GasGo"
        onClick={() => router.push("/")}
      />
    </Box>
  );
};

export default Logo;
