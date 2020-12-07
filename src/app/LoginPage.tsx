import { Box, Button } from 'grommet';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from 'src/auth/authService';
import styles from './LoginPage.module.scss';
import { routes } from './routes';

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const authenticate = async () => {
    try {
      await authService.login('yandex');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('failed to log in', e);
      return;
    } finally {
      setLoading(false);
    }

    history.push(routes.dashboard);
  };

  return (
    <Box className={styles.root}>
      <Button
        primary
        label="Login with Yandex"
        disabled={loading}
        onClick={authenticate}
      />
    </Box>
  );
};

export default LoginPage;
