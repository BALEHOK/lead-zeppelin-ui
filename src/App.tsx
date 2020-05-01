import React from 'react';
import {
  Grommet,
  Main,
  Sidebar,
  Avatar,
  Button,
  Nav,
  Box,
  Text,
} from 'grommet';
import logo from './logo.svg';
import styles from './App.module.scss';
import { Help, Projects, Clock } from 'grommet-icons';

export const App = () => (
  <Grommet plain full>
    <Box direction="row" height={{ min: '100%' }}>
      <Sidebar
        background="brand"
        header={
          <Box direction="row" gap="small" align="center">
            <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            <Text>Shimrit Yacobi</Text>
          </Box>
        }
        footer={
          <Button
            icon={<Help />}
            hoverIndicator
            plain
            gap="medium"
            label="Help"
          />
        }
      >
        <Nav gap="small">
          <Button
            icon={<Projects />}
            hoverIndicator
            plain
            gap="medium"
            label="Projects"
          />
          <Button
            icon={<Clock />}
            hoverIndicator
            plain
            gap="medium"
            label="Glances"
          />
        </Nav>
      </Sidebar>
      <Box className={styles.content}>
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
      </Box>
    </Box>
  </Grommet>
);

export default App;
