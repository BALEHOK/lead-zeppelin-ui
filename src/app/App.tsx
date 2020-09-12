import { Grommet } from 'grommet';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import funnelService from 'src/funnels/funnelService';
import paymentService from 'src/payments/paymentService';
import { storage } from '../common/lib/storage';
import { AppContext } from '../common/state/appContext';
import LoginPage from './LoginPage';
import MainLayout from './MainLayout';
import { theme } from './theme';

export const App = () => {
  const [account, setAccountState] = useState(storage.get('lz_account'));
  const setAccount = (account: string) => {
    setAccountState(account);
    storage.set('lz_account', account);
  };

  const [funnels, setFunnelsState] = useState([]);
  const getFunnels = async () => {
    const nextFunnels = await funnelService.getFunnels(account);
    setFunnelsState(nextFunnels);
  };

  const [payments, setPaymentsState] = useState([]);
  const getPayments = async () => {
    const nextPayments = await paymentService.getPayments(account);
    setPaymentsState(nextPayments);
  };

  return (
    <Grommet theme={theme} full>
      <AppContext.Provider
        value={{
          account: account,
          setAccount,
          funnels,
          getFunnels,
          payments,
          getPayments,
        }}
      >
        {account ? (
          <BrowserRouter>
            <MainLayout />
          </BrowserRouter>
        ) : (
          <LoginPage />
        )}
      </AppContext.Provider>
    </Grommet>
  );
};

export default App;
