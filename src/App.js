import React, { useState } from 'react';
import Cart from './components/Layout/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Layout/Meals/Meals';

function App() {
  const [showCart, setShowCart] = useState(false);

  const closeHandler = () => {
    setShowCart(false);
  };

  const openHandler = () => {
    setShowCart(true);
  };

  return (
    <>
      {showCart && <Cart onClose={closeHandler} />}
      <Header onOpen={openHandler} />
      <Meals />
    </>
  );
}

export default App;
