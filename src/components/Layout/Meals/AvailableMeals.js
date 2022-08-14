import React from 'react';
import Card from '../../UI/Card';
import MealItem from './MealItem';
import MealItemForm from './MealItemForm';
import {DUMMY_MEALS} from '../../data/dummy-meals';
import styles from './AvailableMeals.module.css';

const AvailableMeal = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {/* map to <mealitem> */}
          <MealItem />
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
