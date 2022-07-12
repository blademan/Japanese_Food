import React from 'react';
import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>Japanese Food</h1>
        <HeaderCartButton {...props} />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt={'Japanese food'} />
      </div>
    </>
  );
}
