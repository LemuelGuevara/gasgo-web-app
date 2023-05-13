"use client";

import { Box } from "@mui/joy";
import useMediaQuery from "@mui/material/useMediaQuery";
import FlexBox from "../styled/Box/FlexBox";
import Logo from "./Logo";
import { NavButtonGroup } from "./NavButtonGroup";
import { NavSearchBar } from "./NavSearchBar";
import MenuProfile from "./menu/MenuProfile";
import { useTheme } from "@mui/material/styles";
import { MenuMobile } from "./menu/MenuMobile";
import { Header, MobileHeader } from "../styled/Layouts";

const Navbar = () => {
  const theme = useTheme();

  const isDesktopScreens = useMediaQuery(theme.breakpoints.up(950));
  const isTabletScreens = useMediaQuery(theme.breakpoints.between(750, 950));
  const isMobileScreens = useMediaQuery(theme.breakpoints.between(300, 750));
  const isNonMobileScreens = isTabletScreens;

  return (
    <>
      <>
        {/* Desktop Screens */}
        {isDesktopScreens && (
          <Header>
            <Box
              display="grid"
              alignItems="center"
              gridTemplateColumns="1fr 1fr 1fr"
              gridTemplateRows="80px"
              gap={1}
            >
              <FlexBox sx={{ height: "80px" }}>
                <Logo mediaQuery={isDesktopScreens} />
              </FlexBox>
              <FlexBox sx={{ height: "80px" }}>
                <NavSearchBar mediaQuery={isDesktopScreens} />
              </FlexBox>
              <FlexBox
                sx={{ height: "80px", flexGrow: 1 }}
                gap={1.5}
                justifyContent="flex-end"
              >
                <NavButtonGroup />
                <MenuProfile />
              </FlexBox>
            </Box>
          </Header>
        )}
        {/* Tablet Screens */}
        {isTabletScreens && (
          <Header>
            <FlexBox sx={{ height: "80px", width: "100%" }} gap={3}>
              <Logo mediaQuery={isDesktopScreens} />
              <FlexBox sx={{ height: "80px", width: "100%" }}>
                <NavSearchBar mediaQuery={isTabletScreens} />
              </FlexBox>
              <FlexBox
                pl={4}
                sx={{ height: "80px", flexGrow: 1 }}
                gap={1.5}
                justifyContent="flex-end"
              >
                <NavButtonGroup />
                <MenuProfile />
              </FlexBox>
            </FlexBox>
          </Header>
        )}
        {/* Mobile Screens */}
        {isMobileScreens && (
          <>
            <MobileHeader>
              <FlexBox sx={{ height: "80px", width: "100%" }}>
                <NavSearchBar mediaQuery={isDesktopScreens} />
              </FlexBox>
            </MobileHeader>
            <MenuMobile />
          </>
        )}
      </>
    </>
  );
};

export default Navbar;
