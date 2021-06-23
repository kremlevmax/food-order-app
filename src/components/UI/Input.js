import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <form className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.item} />
    </form>
  );
};

export default Input;
