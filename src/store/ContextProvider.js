import CartContext from "./cart-context.js";
import { useReducer } from "react";

const initialState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(state.items);
      console.log(action.payload.id);

      let updatedItems;
      const existingItem = state.items[existingItemIndex];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      const updatedTotalAmount =
        state.totalAmount + action.payload.amount * action.payload.price;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE_ITEM":
      return initialState;

    default:
      return initialState;
  }
};

const ContextProvider = (props) => {
  const [cartState, cartDispatcher] = useReducer(cartReducer, initialState);

  const addItemHandler = (item) => {
    cartDispatcher({ type: "ADD_ITEM", payload: item });
  };
  const removeItemHandler = (id) => {
    cartDispatcher({ type: "REMOVE_ITEM", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
