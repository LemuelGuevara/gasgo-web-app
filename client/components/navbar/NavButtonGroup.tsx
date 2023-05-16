import MapRoundedIcon from "@mui/icons-material/MapRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import { Box, Typography } from "@mui/joy";
import { FlexBox, FlexBetween } from "../styled/Box/Flex";
import { RoundedButtonGroup } from "../styled/Button/Rounded";
import { NavLink } from "./NavLink";

export const NavButtonGroup = () => {
  const iconSize = 16;

  const navLinks = [
    {
      nav: "Stations",
      link: "/stations",
      icon: <SpaceDashboardRoundedIcon sx={{ fontSize: iconSize }} />,
    },
    {
      nav: "Map",
      link: "/map",
      icon: <MapRoundedIcon sx={{ fontSize: iconSize }} />,
    },
  ];

  return (
    <FlexBox>
      <RoundedButtonGroup
        boxShadow={"sm"}
        border={"1px solid"}
        borderColor="divider"
        height={42}
        sx={{
          cursor: "pointer",
          "&:hover": {
            boxShadow: "md",
            transition: `200ms ease-in-out`,
          },
        }}
      >
        <FlexBetween p={1}>
          {navLinks.map((link, index) => (
            <Box key={index} pl={0.5} pr={0.5}>
              <FlexBetween gap={0.5}>
                <Box pt={0.5}>{link.icon}</Box>
                <Typography level="titleSmall" fontWeight={550}>
                  <NavLink key={index} navText={link.nav} navLink={link.link} />
                </Typography>
                {/* <Divider orientation="vertical" sx={{mr: 1, ml: 1}}/> */}
              </FlexBetween>
            </Box>
          ))}
        </FlexBetween>
      </RoundedButtonGroup>
    </FlexBox>
  );
};
