import React, { useContext, useState, useEffect } from 'react';

import CartContext from '../../../context/cart-context';
import Modal from '../../UI/Modal';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showButton, setShowButton] = useState(false);

  // const showButton = Boolean(Number(cartCtx.totalAmount));
  const { items } = cartCtx;
  const totalAmount = `$${Math.abs(cartCtx.totalAmount).toFixed(2)}`;

  const handleAdd = (item) => {
    cartCtx.addItem(item);
  };

  const handleRemove = (id) => {
    cartCtx.removeItem(id);
  };

  useEffect(() => {
    if (items.length === 0) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [items]);

  return (
    <Modal onClose={props.onClose}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={() =>
            handleAdd({
              id: item.id,
              name: item.name,
              price: item.price,
              amount: 1,
            })
          }
          onRemove={() => {
            handleRemove(item.id);
          }}
        />
      ))}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {showButton && (
          <button
            className={styles.button}
            onClick={() => {
              console.log('Ordering...');
            }}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
