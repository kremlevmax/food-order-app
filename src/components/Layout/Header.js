import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "../Layout/Header.module.css";
import food from "../../assets/food.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food To Go</h1>
        <HeaderCartButton onClick={props.onHeaderCartButtonClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={food} alt='Food To Go' />
      </div>
    </Fragment>
  );
};

export default Header;
