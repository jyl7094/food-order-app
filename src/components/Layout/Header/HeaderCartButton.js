import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../../../context/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [addBump, setAddBump] = useState(false);
  const cartCtx = useContext(CartContext);

  const cartNumberOfItems = cartCtx.items.reduce(
    (prev, item) => Number(prev) + Number(item.amount),
    0
  );

  const { items } = cartCtx;
  const buttonClass = `${styles.button} ${addBump ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAddBump(true);
    const time = setTimeout(() => {
      setAddBump(false);
    }, 300);

    return () => {
      clearTimeout(time);
    };
  }, [items]);

  return (
    <button className={buttonClass} onClick={props.onOpen}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartNumberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
