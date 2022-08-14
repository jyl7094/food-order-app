import React from 'react';

import Modal from '../../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      {/* first list all the items */}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{/* total amt */}$1000</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
