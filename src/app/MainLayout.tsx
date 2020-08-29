import { Avatar, Box, Button, Nav, Sidebar, Text } from 'grommet';
import { Filter, Group, Help, Projects } from 'grommet-icons';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClientsScreen from 'src/clients/ClientsScreen';
import { Dashboard } from 'src/dashboard/DashboardScreen';
import FunnelScreen from 'src/funnels/FunnelsScreen';
import styles from './MainLayout.module.scss';
import { routes } from './routes';
import SidebarItem from './SidebarItem';

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
        <SidebarItem
          to={routes.dashboard}
          icon={<Projects />}
          label="Dashboard"
        />
        <SidebarItem to={routes.funnels} icon={<Filter />} label="Funnels" />
        <SidebarItem to={routes.clients} icon={<Group />} label="Clients" />
      </Nav>
    </Sidebar>
    <Box pad="medium" overflow="auto" className={styles.content}>
      <Switch>
        <Route path={routes.dashboard} exact>
          <Dashboard />
        </Route>
        <Route path={routes.funnels}>
          <FunnelScreen />
        </Route>
        <Route path={routes.clients}>
          <ClientsScreen />
        </Route>
      </Switch>
    </Box>
  </Box>
);

export default MainLayout;
