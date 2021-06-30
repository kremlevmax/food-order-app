import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context.js";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfItems = cartContext.items.reduce((totalAmount, item) => {
    return totalAmount + item.amount;
  }, 0);

  const { items } = cartContext;

  const [buttonIsBumped, setButtonIsBumped] = useState(false);

  const cartButtonStyles = `${classes.button} ${
    buttonIsBumped ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsBumped(true);
    const timer = setTimeout(() => {
      setButtonIsBumped(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={cartButtonStyles} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
