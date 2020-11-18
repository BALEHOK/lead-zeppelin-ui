import { Box, Grommet } from 'grommet';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import accountService from 'src/account/accountService';
import paymentService from 'src/analytics/analyticsService';
import clientService from 'src/clients/clientService';
import { storage } from 'src/common/lib/storage';
import { AppContext, IAccount } from 'src/common/state/appContext';
import funnelService from 'src/funnels/funnelService';
import Loader from 'src/uiKit/loader/Loader';
import LoginPage from './LoginPage';
import MainLayout from './MainLayout';
import { theme } from './theme';

export const App = () => {
  const [account, setAccountState] = useState(null as IAccount);
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

  const [payments, setPaymentsState] = useState([]);
  const getPayments = async () => {
    const nextPayments = await paymentService.getPayments(account.code);
    setPaymentsState(nextPayments);
  };

  const [clients, setClientsState] = useState([]);
  const getClients = async () => {
    const nextClients = await clientService.getClients(account.code);
    setClientsState(nextClients);
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
          payments,
          getPayments,
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
