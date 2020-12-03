import { Avatar, Box, Button, Nav, Sidebar, Text } from 'grommet';
import { Diamond, Filter, Help, Optimize, Projects } from 'grommet-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import AnalyticsScreen from 'src/analytics/AnalyticsScreen';
import { getAuthCode } from 'src/auth/auth';
import { IAppState } from 'src/common/state/appContext';
import { withContext } from 'src/common/state/withContext';
import { Dashboard } from 'src/dashboard/DashboardScreen';
import FunnelScreen from 'src/funnels/FunnelsScreen';
import UnitScreen from 'src/unitEconomics/UnitScreen';
import styles from './MainLayout.module.scss';
import { routes } from './routes';
import SidebarItem from './SidebarItem';

export const MainLayout = ({ account }: IAppState) => {
  const { t } = useTranslation();

  const authenticate = async () => {
    const authData = await getAuthCode('yandex');
    // eslint-disable-next-line no-console
    console.log('got auth', authData);
  };

  return (
    <Box direction="row" height={{ min: '100%' }}>
      <Sidebar
        className={styles.sidebar}
        header={
          <Box direction="row" gap="small" align="center">
            <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            <Text>{account.name}</Text>
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
            label={t('mainMenu.dashboard')}
          />
          <SidebarItem
            to={routes.funnels}
            icon={<Filter />}
            label={t('mainMenu.funnels')}
          />
          <SidebarItem
            to={routes.analytics}
            icon={<Diamond />}
            label={t('mainMenu.analytics')}
          />
          <SidebarItem
            to={routes.unitEconomics}
            icon={<Optimize />}
            label={t('mainMenu.unit')}
          />
          <button onClick={authenticate}>Yandex</button>
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
          <Route path={routes.analytics}>
            <AnalyticsScreen />
          </Route>
          <Route path={routes.unitEconomics}>
            <UnitScreen />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

export default withContext(MainLayout);
