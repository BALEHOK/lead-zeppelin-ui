import { Avatar, Box, Text } from 'grommet';
import { AccountType } from 'src/common/api/graphql-zeus';

interface IProps {
  account: AccountType;
}

export const Display = ({ account }: IProps) => (
  <Box direction="row" gap="small" align="center">
    <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
    <Text>{account.name}</Text>
  </Box>
);
