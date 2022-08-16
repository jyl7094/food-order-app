import React, { useRef } from 'react';

import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const amount = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(amount.current.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label='Amount'
        ref={amount}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
