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

  const orderOnClick = (event) => {
    setOrderPressed((prevState) => true);
  };

  return (
    <Modal onBackdropOrCloseButtonClick={props.onBackdropOrCloseButtonClick}>
      {cartItems}
      <div className={styles.total}>Total: ${totalAmount}</div>
      <div className={styles.actions}>
        {totalAmount > 0 && (
          <button className={styles.button} onClick={orderOnClick}>
            Order
          </button>
        )}
        <button
          className={styles["button--alt"]}
          onClick={props.onBackdropOrCloseButtonClick}
        >
          Cancel
        </button>
      </div>
      {orderPressed && (
        <AddressForm onCancel={props.onBackdropOrCloseButtonClick} />
      )}
    </Modal>
  );
};

export default Cart;
