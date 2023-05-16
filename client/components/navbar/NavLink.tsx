import Link from "@mui/material/Link";
import NextLink from "next/link";
import React from "react";

interface NavLinkProps {
  navLink?: string;
  navText?: string;
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <Link
      component={NextLink}
      href={props.navLink}
      underline="none"
      color="black"
    >
      {props.navText}
    </Link>
  );
};
