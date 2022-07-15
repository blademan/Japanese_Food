import React from 'react';
import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to={'/'}>Japanese Food</Link>
        </h1>

        <ul className="nav-wrapper">
          <li>
            <Link to="contacts">Contact</Link>
          </li>

          <li>
            <Link to="about">About</Link>
          </li>
        </ul>

        <HeaderCartButton {...props} />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt={'Japanese food'} />
      </div>
    </>
  );
}
