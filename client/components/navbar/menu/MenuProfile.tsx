import { AuthModal } from "@/components/modals/AuthModal";
import { FlexBox } from "@/components/styled/Box/Flex";
import { RoundedButton } from "@/components/styled/Button/Rounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Avatar, Menu, MenuItem } from "@mui/joy";
import { useRouter } from "next/navigation";
import React from "react";

interface MenuItemProps {
  menuText?: string;
  menuLink?: string;
}

export const MenuProfile: React.FC<MenuItemProps> = () => {
  const router = useRouter();
  const isAuthenticated = false;

  // Handlers
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Maps
  const menuAuth = [
    {
      menuText: "Profile",
      menuLink: "/profile",
    },
    {
      menuText: "Favorites",
      menuLink: "/favorites",
    },
  ];

  const menuNonAuth = [
    {
      menuText: "Login",
    },
    {
      menuText: "Sign Up",
    },
  ];

  return (
    <div>
      <RoundedButton
        onClick={handleClick}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          color: "black",
          cursor: "pointer",
          boxShadow: "sm",
          paddingLeft: 1.5,
          paddingRight: 0.5,
          "&:hover": {
            boxShadow: "md",
            transition: `200ms ease-in-out`,
          },
        }}
      >
        <FlexBox>
          <FlexBox>
            <FlexBox pr={1}>
              <MenuRoundedIcon sx={{ fontSize: 20 }} />
            </FlexBox>
            <FlexBox>
              <Avatar size="sm" />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </RoundedButton>

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        aria-labelledby="basic-demo-button"
        placement="bottom-end"
      >
        {isAuthenticated ? (
          menuAuth.map((menuItem, index) => (
            <MenuItem
              key={index}
              onClick={() => router.push(menuItem.menuLink)}
            >
              {menuItem.menuText}
            </MenuItem>
          ))
        ) : (
          <div>
            <MenuItem onClick={() => setOpenModal(true)}>Log in</MenuItem>
            <MenuItem onClick={() => setOpenModal(true)}>Sign Up</MenuItem>
          </div>
        )}

        {/* <AuthModal openModal={openModal} setOpenmodal={setOpenModal} /> */}
      </Menu>

      <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default MenuProfile;
