import { Box, Grommet } from 'grommet';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import accountService from 'src/account/accountService';
import analyticsService from 'src/analytics/analyticsService';
import clientService from 'src/clients/clientService';
import { AccountType } from 'src/common/api/graphql-zeus';
import { storage } from 'src/common/lib/storage';
import { AppContext } from 'src/common/state/appContext';
import funnelService from 'src/funnels/funnelService';
import Loader from 'src/uiKit/loader/Loader';
import LoginPage from './LoginPage';
import MainLayout from './MainLayout';
import { theme } from './theme';

export const App = () => {
  const [account, setAccountState] = useState(null as AccountType);
  const [loadingAccount, setLoadingAccount] = useState(false);

  useEffect(() => {
    if (!account) {
      const accountCode = storage.get('lz_account');
      if (accountCode) {
        setLoadingAccount(true);
        accountService.getAccount(accountCode).then((a) => {
          setAccountState(a);
          setLoadingAccount(false);
        });
      }
    }
  }, []);

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
        {!loadingAccount &&
          (account ? (
            <BrowserRouter>
              <MainLayout />
            </BrowserRouter>
          ) : (
            <LoginPage />
          ))}
      </AppContext.Provider>
    </Grommet>
  );
};

export default App;
