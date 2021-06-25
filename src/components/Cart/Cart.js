import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ name: "Banana Ice Cream", id: "1c", price: "7.99" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>Total: 33.55</div>
      <div className={styles.actions}>
        <button className={styles.button}>Order</button>
        <button className={styles["button--alt"]}>Cancel</button>
      </div>
    </Modal>
  );
};

export default Cart;
