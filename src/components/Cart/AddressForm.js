import styles from "./AddressForm.module.css";

const AddressForm = () => {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' />
      </div>
      <div className={styles.control}>
        <label htmlFor='address'>Address:</label>
        <input type='text' id='address' />
      </div>
      <div className={styles.control}>
        <label htmlFor='phone'>Phone number:</label>
        <input type='text' id='phone' />
      </div>
    </form>
  );
};

export default AddressForm;
