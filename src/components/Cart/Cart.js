import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = cartContext.totalAmount.toFixed(2);

  const addCartItemHandler = (item) => {};
  const removeCartItemHandler = (id) => {};

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onAdd={addCartItemHandler}
            onRemove={removeCartItemHandler}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onBackdropOrCloseButtonClick={props.onBackdropOrCloseButtonClick}>
      {cartItems}
      <div className={styles.total}>Total: ${totalAmount}</div>
      <div className={styles.actions}>
        {totalAmount > 0 && <button className={styles.button}>Order</button>}
        <button
          className={styles["button--alt"]}
          onClick={props.onBackdropOrCloseButtonClick}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
