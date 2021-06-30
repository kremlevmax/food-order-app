import CartContext from "./cart-context.js";
import { useReducer } from "react";

const initialState = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
  let existingItemIndex;
  let updatedTotalAmount;
  let updatedItems;
  let existingItem;

  switch (action.type) {
    case "ADD_ITEM":
      existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      existingItem = state.items[existingItemIndex];

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

      updatedTotalAmount =
        state.totalAmount + action.payload.amount * action.payload.price;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE_ITEM":
      existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      existingItem = state.items[existingItemIndex];
      updatedTotalAmount = state.totalAmount - existingItem.price;

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

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
