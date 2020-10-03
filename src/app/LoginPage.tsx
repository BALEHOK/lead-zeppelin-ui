import { Box, Button, Form, Text, TextInput } from 'grommet';
import React, { useState } from 'react';
import accountService from 'src/account/accountService';
import { storage } from 'src/common/lib/storage';
import { IAppState } from '../common/state/appContext';
import { withContext } from '../common/state/withContext';
import styles from './LoginPage.module.scss';

export const LoginPage = ({ setAccount }: IAppState) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadAccount = async ({
    value: { accountCode },
  }: {
    value: { accountCode: string };
  }) => {
    setLoading(true);
    setError(null);
    const account = await accountService.getAccount(accountCode);
    setLoading(false);
    if (account) {
      storage.set('lz_account', account.code);
      setAccount(account);
      setError(null);
      return;
    }

    setError('Account not found');
  };

  return (
    <Box className={styles.root}>
      <Form onSubmit={loadAccount as any}>
        <Box gap="medium">
          <TextInput
            name="accountCode"
            placeholder="Account code"
            color="white"
            disabled={loading}
          />
          <Button type="submit" primary label="Enter" disabled={loading} />
          {loading && <Text>Loading account info...</Text>}
          {error && !loading && <Text>{error}</Text>}
        </Box>
      </Form>
    </Box>
  );
};

export default withContext(LoginPage);
