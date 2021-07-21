import styles from "./Cart.module.css";
import { useRef, useState } from "react";

const isValueValid = (value) => value.trim() !== "";
const isPhoneValid = (phoneNumber) => phoneNumber.trim().length === 10;

const AddressForm = (props) => {
  const [formIsValid, setFormIsValid] = useState({
    nameIsValid: true,
    addressIsValid: true,
    telephoneIsValid: true,
  });

  const nameRef = useRef();
  const addressRef = useRef();
  const telephoneRef = useRef();

  const orderHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const telephone = telephoneRef.current.value;

    setFormIsValid({
      nameIsValid: isValueValid(name),
      addressIsValid: isValueValid(address),
      telephoneIsValid: isPhoneValid(telephone),
    });

    props.onConfirm({ name, address, telephone });
  };

  return (
    <form>
      <div className={styles.control}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' ref={nameRef} />
        {!formIsValid.nameIsValid && <p>Enter a valid name:</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor='address'>Address:</label>
        <input type='text' id='address' ref={addressRef} />
        {!formIsValid.addressIsValid && <p>Enter a valid address:</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor='phone'>Phone number:</label>
        <input type='text' id='phone' ref={telephoneRef} />
        {!formIsValid.telephoneIsValid && <p>Enter a valid telephone:</p>}
      </div>
      <button onClick={orderHandler} className={styles.button}>
        Order
      </button>
      <button onClick={props.onCancel} className={styles["button--alt"]}>
        Cancel
      </button>
    </form>
  );
};

export default AddressForm;
