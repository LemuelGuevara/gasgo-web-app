import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import GasMeterOutlinedIcon from '@mui/icons-material/GasMeterOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { useRouter } from "next/navigation";
import { Box, Stack, Typography } from "@mui/joy";

interface MenuMobileProps {
  text: string;
  link: string;
  color: string;
  icon: any;
}

const MenuMobileTab: React.FC<MenuMobileProps> = (props) => {
  const router = useRouter();

  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="25%"
      sx={{cursor: "pointer"}}
      onClick={() => router.push(props.link)}
    >
      <Box color={props.color}>{props.icon}</Box>
      <Typography level="labelMedium" textColor={props.color}>
        {props.text}
      </Typography>
    </Box>
  );
};

export const MenuMobile = () => {
  const isAuthenticated = false;
  const iconSize = 32;

  const menuItems = [
    {
      menuText: "Home",
      menuLink: "/",
      menuIcon: <SpaceDashboardOutlinedIcon  sx={{ fontSize: iconSize }} />,
    },
    {
      menuText: "Stations",
      menuLink: "/stations",
      menuIcon: <GasMeterOutlinedIcon sx={{ fontSize: iconSize }} />,
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack
        height={80}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {menuItems.map((menuItem, index) => (
          <MenuMobileTab
            key={index}
            text={menuItem.menuText}
            link={menuItem.menuLink}
            color={"text.tertiary"}
            icon={menuItem.menuIcon}
          />
        ))}
        {isAuthenticated ? (
          <MenuMobileTab
          text={"Profile"}
          link={"/profile"}
          color={"text.tertiary"}
          icon={<AccountCircleOutlinedIcon sx={{ fontSize: iconSize }} />}
        />
        ) : (
          <MenuMobileTab
          text={"Log in"}
          link={"/login"}
          color={"text.tertiary"}
          icon={<AccountCircleOutlinedIcon sx={{ fontSize: iconSize }} />}
        />
        )}
        
      </Stack>
    </Box>
  );
};
