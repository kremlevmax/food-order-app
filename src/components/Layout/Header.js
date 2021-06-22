import React, { Fragment } from "react";

import HeaderIconButton from "./HeaderCartButton";

import classes from "../Layout/Header.module.css";
import food from "../../assets/food.jpeg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food To Go</h1>
        <HeaderIconButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={food} alt='Food to go' />
      </div>
    </Fragment>
  );
};

export default Header;
