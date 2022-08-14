import React from "react";
import styles from './Cart.module.css';
const Cart = () => {
    <Modal>
        {/* first list all the items */}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{/* total amt */}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']}>
                Close
            </button>
        </div>
    </Modal>
}

export default Cart;