import { DataTable, Text } from 'grommet';
import React from 'react';
import { IPayment } from 'src/common/state/appContext';

interface IProps {
  payments: IPayment[];
}

export const PaymentsList = ({ payments }: IProps) => (
  <DataTable
    columns={[
      {
        property: 'channel',
        header: <Text>Channel</Text>,
        primary: true,
      },
      // {
      //   property: 'lead.source',
      //   header: <Text>Source</Text>,
      // },
      // {
      //   property: 'lead.medium',
      //   header: <Text>Medium</Text>,
      // },
      // {
      //   property: 'lead.campaign',
      //   header: <Text>Campaign</Text>,
      // },
      // {
      //   property: 'lead.content',
      //   header: <Text>Content</Text>,
      // },
      {
        property: 'count',
        header: <Text>Payments</Text>,
      },
      {
        property: 'amount',
        render: (channelPayment) => (channelPayment.amount / 100).toFixed(2),
        header: <Text>Revenue</Text>,
      },
    ]}
    data={payments}
    sortable
  />
);
