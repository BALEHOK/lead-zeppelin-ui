import { Box, Grommet } from 'grommet';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import accountService from 'src/account/accountService';
import analyticsService from 'src/analytics/analyticsService';
import { authService } from 'src/auth/authService';
import { AccountType } from 'src/common/api/graphql-zeus';
import { AppContext } from 'src/common/state/appContext';
import funnelService from 'src/funnels/funnelService';
import Loader from 'src/uiKit/loader/Loader';
import LoginPage from './LoginPage';
import MainLayout from './MainLayout';
import { routes } from './routes';
import { theme } from './theme';

export const App = () => {
  const [accounts, setAccounts] = useState<Array<AccountType>>([]);
  const [account, setAccountState] = useState(null as AccountType);
  const [loadingAccounts, setLoadingAccounts] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = authService.getToken();
    if (!token) {
      location.pathname !== routes.login && history.push(routes.login);
      return;
    }

    if (!account) {
      setLoadingAccounts(true);
      accountService.getAccounts().then((accounts) => {
        setAccounts(accounts);
        const account = accounts?.length ? accounts[0] : null;

        setAccountState(account);
        setLoadingAccounts(false);
      });
    }
  }, [location.pathname]);

  const [funnels, setFunnelsState] = useState([]);
  const getFunnels = async () => {
    const nextFunnels = await funnelService.getFunnels(account.code);
    setFunnelsState(nextFunnels);
  };

  const [analyticsData, setAnalyticsState] = useState([]);
  const loadAnalytics = async () => {
    const nextPayments = await analyticsService.loadAnalytics(account.code);
    setAnalyticsState(nextPayments);
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

  const setAccount = (selectedAccount: AccountType) => {
    setFunnelsState([]);
    setAnalyticsState([]);
    setAccountState(selectedAccount);
  };

  return (
    <Grommet theme={theme} full>
      <AppContext.Provider
        value={{
          accounts,
          account,
          setAccount,
          funnels,
          getFunnels,
          analyticsData,
          loadAnalytics,
          updateChannelAc,
        }}
      >
        {loadingAccounts && (
          <Box height="100%" width="100%" align="center" justify="center">
            <Loader />
          </Box>
        )}
        {!loadingAccounts && (
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
