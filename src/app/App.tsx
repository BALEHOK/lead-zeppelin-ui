import { Grommet } from 'grommet';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { api } from 'src/common/lib/api';
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
    const result = await api.post('', {
      query: `query Accounts($code: String!) {
                account(code: $code) {
                  funnels {
                    id
                    name
                    steps {
                      id
                      code
                      name
                    }
                  }
                }
              }`,
      variables: { code: account },
    });

    console.log('funnels', result.data);

    setFunnelsState(result.data?.data?.account?.funnels || []);
  };

  return (
    <Grommet theme={theme} full>
      <AppContext.Provider
        value={{ account: account, setAccount, funnels, getFunnels }}
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
