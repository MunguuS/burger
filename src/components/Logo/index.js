import React from "react";
import logoImage from "../../assets/images/burger-logo.png";
import css from "./style.module.css";

const Logo = (props) => (
  <div className={css.Logo}>
    <img src={logoImage} />
  </div>
);

export default Logo;
