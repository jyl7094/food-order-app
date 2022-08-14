import React from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
