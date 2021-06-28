import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 0) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCard(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label='Amount'
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ ADD</button>
      {!amountIsValid && <p>Enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
