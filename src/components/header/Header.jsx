import React from "react";
import "./Header.css";
import Icons from "./icons/Icons";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";

function Header() {
  return (
    <>
      <div className="header-block">
        <Logo />
        <Menu />
        <Icons />
      </div>
    </>
  );
}

export default Header;
