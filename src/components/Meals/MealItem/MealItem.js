import { useContext } from "react";

import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addToCardHandler = (enteredAmountNumber) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <h3>{props.name}</h3>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>{price}</div>
      <div>
        <MealItemForm onAddToCard={addToCardHandler} />
      </div>
    </li>
  );
};

export default MealItem;
