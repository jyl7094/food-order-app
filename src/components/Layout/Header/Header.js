import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../images/meals.jpeg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of festival foods"/>
      </div>
    </>
  );
};

export default Header;
