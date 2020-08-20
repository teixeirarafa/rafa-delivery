import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={`${styles.logo} fontLogo`} to="/">
          Rafa Delivery
        </Link>
        <Link className={styles.login} to="/">
          entrar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
