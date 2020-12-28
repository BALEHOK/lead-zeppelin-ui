import { Box, Menu } from 'grommet';
import { FormDown } from 'grommet-icons';
import React from 'react';
import { AccountType } from 'src/common/api/graphql-zeus';
import { TFunction1 } from 'src/common/lib/functionTypes';
import { Display } from './display';

interface IProps {
  accounts: AccountType[];
  account: AccountType;
  setAccount: TFunction1<AccountType>;
}

export const AccountSelector = ({ accounts, account, setAccount }: IProps) => {
  if (!accounts?.length) {
    return null;
  }

  if (accounts?.length === 1) {
    return <Display account={account} />;
  }

  return (
    <Menu
      items={accounts.map((a) => ({
        label: a.name,
        onClick: () => setAccount(a),
      }))}
    >
      <Box direction="row" gap="small" align="center">
        <Display account={account} />
        <FormDown />
      </Box>
    </Menu>
  );
};
