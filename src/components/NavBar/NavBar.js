import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContent}>
          <NavLink to="/" className={styles.icon}>
            <i className="fa fa-tasks" aria-hidden="true"></i>
          </NavLink>
          <ul className={styles.links}>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/about">About</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;