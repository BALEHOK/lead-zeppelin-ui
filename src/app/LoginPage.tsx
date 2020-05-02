import React, { useState } from 'react';
import { Box } from 'grommet/components/Box';
import { Form } from 'grommet/components/Form';
import { TextInput } from 'grommet/components/TextInput';
import { Button } from 'grommet/components/Button';
import { withContext } from '../common/state/withContext';
import { IAppState } from '../common/state/appContext';
import styles from './LoginPage.module.scss';

export const LoginPage = ({ setAccount }: IAppState) => {
  return (
    <Box className={styles.root}>
      <Form
        onSubmit={({ value }: any) => {
          setAccount(value.account);
        }}
      >
        <Box gap="medium">
          <TextInput name="account" placeholder="Account code" color="white" />
          <Button type="submit" primary label="Enter" />
        </Box>
      </Form>
    </Box>
  );
};

export default withContext(LoginPage);
