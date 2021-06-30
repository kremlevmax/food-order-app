import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = cartContext.totalAmount.toFixed(2);

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
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
