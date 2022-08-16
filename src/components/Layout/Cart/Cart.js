import React, { useContext } from 'react';

import CartContext from '../../../context/cart-context';
import Modal from '../../UI/Modal';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const showButton = Boolean(cartCtx.totalAmount);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const handleAdd = (item) => {
    cartCtx.addItem(item);
  };

  const handleRemove = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onClose={props.onClose}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={() => handleAdd(item)}
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
        {showButton && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
