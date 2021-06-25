import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/ContextProvider";

import { useState } from "react";

function App() {
  const [isModalShown, setModalShown] = useState(false);

  const showModalWindow = () => {
    setModalShown(true);
  };

  const hideModalWindow = () => {
    setModalShown(false);
  };
  return (
    <CartContextProvider>
      {isModalShown && <Cart onBackdropOrCloseButtonClick={hideModalWindow} />}
      <Header onHeaderCartButtonClick={showModalWindow} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
