import { DataTable, Text } from 'grommet';
import React from 'react';

interface IProps {
  payments: any[];
}

export const PaymentsList = ({ payments }: IProps) => (
  <DataTable
    columns={[
      {
        property: 'channel',
        header: <Text>Channel</Text>,
        primary: true,
        size: 'large',
      },
      {
        property: 'count',
        header: <Text>User acquisition</Text>,
      },
      {
        property: 'buyers',
        header: <Text>Buyers</Text>,
      },
      {
        property: 'revenue',
        render: (channelPayment) => (channelPayment.revenue / 100).toFixed(2),
        header: <Text>Revenue</Text>,
      },
    ]}
    data={payments}
    sortable
    pad={{ horizontal: 'large' }}
  />
);
