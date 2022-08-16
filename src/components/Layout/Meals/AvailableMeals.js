import React from 'react';

import Card from '../../UI/Card';
import MealItem from './MealItem';
import DUMMY_MEALS from '../../../assets/data/dummy-meals';
import styles from './AvailableMeals.module.css';

const AvailableMeal = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
