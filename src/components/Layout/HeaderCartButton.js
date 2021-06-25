import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context.js";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfItems = cartContext.items.reduce((totalAmount, item) => {
    return totalAmount + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
