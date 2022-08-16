import React, { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../context/cart-context';
import styles from './MealItem.module.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const handleAdd = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    };
    cartCtx.addItem(item);
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAdd={handleAdd} />
      </div>
    </li>
  );
};

export default MealItem;
