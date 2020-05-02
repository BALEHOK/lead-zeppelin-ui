import React, { useState } from 'react';
import { Grommet } from 'grommet';
import { AppContext } from '../common/state/appContext';
import LoginPage from './LoginPage';
import MainLayout from './MainLayout';
import { storage } from '../common/lib/storage';
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
    <AppContext.Provider value={{ account: state.account, setAccount }}>
      <Grommet theme={theme} full>
        {state.account ? <MainLayout /> : <LoginPage />}
      </Grommet>
    </AppContext.Provider>
  );
};

export default App;
