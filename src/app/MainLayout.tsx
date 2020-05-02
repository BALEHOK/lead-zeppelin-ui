import React from 'react';
import { Box, Sidebar, Avatar, Button, Nav, Text } from 'grommet';
import { Help, Projects, PowerCycle } from 'grommet-icons';
import logo from './logo.svg';
import styles from './MainLayout.module.scss';

export const MainLayout = () => (
  <Box direction="row" height={{ min: '100%' }}>
    <Sidebar
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
          icon={<PowerCycle />}
          hoverIndicator
          plain
          gap="medium"
          label="Glances"
        />
      </Nav>
    </Sidebar>
    <Box pad="medium" overflow="auto" className={styles.content}>
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
);

export default MainLayout;
