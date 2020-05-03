import React from 'react';
import { Box, Sidebar, Avatar, Button, Nav, Text } from 'grommet';
import { Help, Projects, PowerCycle } from 'grommet-icons';
import styles from './MainLayout.module.scss';
import { routes } from './routes';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Dashboard } from '../dashboard/Dashboard';
import { Clients } from '../clients/Clients';

export const MainLayout = () => (
  <Box direction="row" height={{ min: '100%' }}>
    <Sidebar
      className={styles.sidebar}
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
        <NavLink to={routes.dashboard}>Dashboard</NavLink>
        <NavLink to={routes.clients}>Clients</NavLink>
      </Nav>
    </Sidebar>
    <Box pad="medium" overflow="auto" className={styles.content}>
      <Switch>
        <Route path={routes.dashboard} exact>
          <Dashboard />
        </Route>
        <Route path={routes.clients}>
          <Clients />
        </Route>
      </Switch>
    </Box>
  </Box>
);

export default MainLayout;
