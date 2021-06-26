import CartContext from "./cart-context.js";

const initialState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItems = state.items.concat(action.payload);
      const updatedTotalAmount =
        state.totalAmount + action.payload.amount * state.payload.price;
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
    items: [],
    totalAmount: 0,
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
