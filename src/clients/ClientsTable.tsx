import React from 'react';
import { DataTable, Text } from 'grommet';

export const ClientsTable = ({ clients }) => (
  <DataTable
    columns={[
      {
        property: 'accountId',
        header: <Text>Account</Text>,
      },
      {
        property: 'name',
        header: <Text>Name</Text>,
        primary: true,
      },
    ]}
    data={clients}
  />
);
