import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Input } from "@mui/joy";
import React from "react";

interface NavSearcBarMediaQueryProps {
  mediaQuery?: boolean;
}

export const NavSearchBar: React.FC<NavSearcBarMediaQueryProps> = (props) => {
  const isDesktopScreens = props.mediaQuery;
  const searchBarHeight = isDesktopScreens ? "42px" : "55px" 
  
  return (
    <Input
      placeholder="Search gas station"
      variant="outlined"
      startDecorator={
        <SearchRoundedIcon
          sx={{
            color: "gray",
            cursor: "pointer",
          }}
        />
      }
      sx={{
        flexGrow: 1,
        height: searchBarHeight,
        boxShadow: "sm",
        borderRadius: "24px",
        "&:hover": { boxShadow: "sm", transition: "0.2s ease-in" },
      }}
    />
  );
};
