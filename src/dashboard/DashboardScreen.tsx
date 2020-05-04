import React from 'react';
import logo from './logo.svg';
import styles from './DashboardScreen.module.scss';

export const Dashboard = () => (
  <>
    <img src={logo} className={styles.appLogo} alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className={styles.appLink}
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </>
);