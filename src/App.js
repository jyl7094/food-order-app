import React, { useState, useEffect } from 'react';

import CartProvider from './context/CartProvider';
import Cart from './components/Layout/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Layout/Meals/Meals';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => {
    setShowCart(false);
  };

  const handleOpen = () => {
    setShowCart(true);
  };

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showCart]);

  return (
    <>
      <CartProvider>
        {showCart && <Cart onClose={handleClose} />}
        <Header onOpen={handleOpen} />
        <Meals />
      </CartProvider>
    </>
  );
};

export default App;
