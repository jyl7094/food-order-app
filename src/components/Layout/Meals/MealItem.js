import React from "react";
import MealItemForm from "./MealItemForm";
import styles from './MealItem.module.css';

const MealItem = () => {
    return (
        <li className={styles.meal}>
          <div>
            <h3>Sushi</h3>
            <div className={styles.description}>Finest fish and veggies</div>
            <div className={styles.price}>22.99</div>
          </div>
          <div>
            <MealItemForm />
          </div>
        </li>
    )
}

export default MealItem;