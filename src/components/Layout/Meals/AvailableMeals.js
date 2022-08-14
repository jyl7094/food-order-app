import React from 'react';

import Card from '../../UI/Card';
import MealItem from './MealItem';
import DUMMY_MEALS from '../../../data/dummy-meals';
import styles from './AvailableMeals.module.css';

const AvailableMeal = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {/* map to <mealitem> */}
          {DUMMY_MEALS.map((meal) => {
            return (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
