import React from "react";
import HanburgerMenu from "../HanburgerMenu";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";

const ToolBar = (props) => (
  <header className={css.Toolbar}>
    <HanburgerMenu toggleSideBar={props.toggleSideBar} />
    <Logo />
    <nav className={css.OnHideMobile}>
      <Menu />
    </nav>
  </header>
);

export default ToolBar;
