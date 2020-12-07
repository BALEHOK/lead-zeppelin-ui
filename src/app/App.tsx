import { Box, Grommet } from 'grommet';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import accountService from 'src/account/accountService';
import analyticsService from 'src/analytics/analyticsService';
import { authService } from 'src/auth/authService';
import clientService from 'src/clients/clientService';
import { AccountType } from 'src/common/api/graphql-zeus';
import { AppContext } from 'src/common/state/appContext';
import funnelService from 'src/funnels/funnelService';
import Loader from 'src/uiKit/loader/Loader';
import LoginPage from './LoginPage';
import MainLayout from './MainLayout';
import { routes } from './routes';
import { theme } from './theme';

export const App = () => {
  const [account, setAccountState] = useState(null as AccountType);
  const [loadingAccount, setLoadingAccount] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = authService.getToken();
    if (!token) {
      location.pathname !== routes.login && history.push(routes.login);
      return;
    }

    if (!account) {
      setLoadingAccount(true);
      accountService.getAccounts().then((accounts) => {
        const account = accounts?.length ? accounts[0] : null;

        setAccountState(account);
        setLoadingAccount(false);
      });
    }
  }, [location.pathname]);

  const [funnels, setFunnelsState] = useState([]);
  const getFunnels = async () => {
    const nextFunnels = await funnelService.getFunnels(account.code);
    setFunnelsState(nextFunnels);
  };

  const [analyticsData, setPaymentsState] = useState([]);
  const loadAnalytics = async () => {
    const nextPayments = await analyticsService.loadAnalytics(account.code);
    setPaymentsState(nextPayments);
  };

  const [clients, setClientsState] = useState([]);
  const getClients = async () => {
    const nextClients = await clientService.getClients(account.code);
    setClientsState(nextClients);
  };

  const updateChannelAc = async (channel: string, ac: number) => {
    const success = await analyticsService.updateChannelAc(
      account.id,
      channel,
      ac
    );
    if (success) {
      loadAnalytics();
    }
  };

  return (
    <Grommet theme={theme} full>
      <AppContext.Provider
        value={{
          account,
          setAccount: setAccountState,
          clients,
          getClients,
          funnels,
          getFunnels,
          analyticsData,
          loadAnalytics,
          updateChannelAc,
        }}
      >
        {loadingAccount && (
          <Box height="100%" width="100%" align="center" justify="center">
            <Loader />
          </Box>
        )}
        {!loadingAccount && (
          <Switch>
            <Route path={routes.login}>
              <LoginPage />
            </Route>
            {account && (
              <Route>
                <MainLayout />
              </Route>
            )}
          </Switch>
        )}
      </AppContext.Provider>
    </Grommet>
  );
};

export default App;
