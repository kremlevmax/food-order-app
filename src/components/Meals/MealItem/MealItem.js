import styles from "./MealItem.module.css";

const MealITem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <h3>{props.name}</h3>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>{price}</div>
    </li>
  );
};

export default MealITem;
