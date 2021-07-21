import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import AddressForm from "./AddressForm";

import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";

const Cart = (props) => {
  const [orderPressed, setOrderPressed] = useState(false);
  const cartContext = useContext(CartContext);
  const totalAmount = cartContext.totalAmount.toFixed(2);

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const orderOnClick = (event) => {
    setOrderPressed((prevState) => true);
  };

  const confirmOnClick = (userData) => {
    fetch(
      "https://food-order-app-c3155-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, order: cartContext.items }),
      }
    );
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
        {totalAmount > 0 && !orderPressed && (
          <button className={styles.button} onClick={orderOnClick}>
            Order
          </button>
        )}
        {!orderPressed && (
          <button
            className={styles["button--alt"]}
            onClick={props.onBackdropOrCloseButtonClick}
          >
            Cancel
          </button>
        )}
      </div>
      {orderPressed && (
        <AddressForm
          onConfirm={confirmOnClick}
          onCancel={props.onBackdropOrCloseButtonClick}
        />
      )}
    </Modal>
  );
};

export default Cart;
