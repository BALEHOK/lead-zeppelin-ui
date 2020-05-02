import React, { useState } from 'react';
import { Grommet } from 'grommet';
import { AppContext } from '../common/state/appContext';
import LoginPage from './LoginPage';
import MainLayout from './MainLayout';

export const App = () => {
  const [state, setState] = useState({
    account: '',
  });
  const setAccount = (account: string) => setState({ account });
  return (
    <AppContext.Provider value={{ account: state.account, setAccount }}>
      <Grommet themeMode="dark" full>
        {state.account ? <MainLayout /> : <LoginPage />}
      </Grommet>
    </AppContext.Provider>
  );
};

export default App;
