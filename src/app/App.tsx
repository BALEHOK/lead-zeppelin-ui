import { Grommet } from 'grommet';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storage } from '../common/lib/storage';
import { AppContext } from '../common/state/appContext';
import LoginPage from './LoginPage';
import MainLayout from './MainLayout';
import { theme } from './theme';

export const App = () => {
  const [state, setState] = useState({
    account: storage.get('lz_account'),
  });
  const setAccount = (account: string) => {
    setState({ account });
    storage.set('lz_account', account);
  };

  return (
    <Grommet theme={theme} full>
      <AppContext.Provider value={{ account: state.account, setAccount }}>
        {state.account ? (
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
