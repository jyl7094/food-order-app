import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../../assets/images/meals.jpeg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onOpen={props.onOpen} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of festival foods' />
      </div>
    </>
  );
};

export default Header;
