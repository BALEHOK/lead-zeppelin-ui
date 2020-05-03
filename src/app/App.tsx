import React, { useState } from 'react';
import { Grommet } from 'grommet';
import { AppContext } from '../common/state/appContext';
import LoginPage from './LoginPage';
import MainLayout from './MainLayout';
import { storage } from '../common/lib/storage';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';

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
        <BrowserRouter>
          {state.account ? <MainLayout /> : <LoginPage />}
        </BrowserRouter>
      </AppContext.Provider>
    </Grommet>
  );
};

export default App;
