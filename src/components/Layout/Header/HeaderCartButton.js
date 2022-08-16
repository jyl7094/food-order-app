import React, { useContext } from 'react';

import CartContext from '../../../context/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const cartNumberOfItems = cartCtx.items.reduce(
    (prev, item) => Number(prev) + Number(item.amount),
    0
  );

  return (
    <button className={styles.button} onClick={props.onOpen}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartNumberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
