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
        property: 'created',
        render: (payment: IPayment) => payment.created.toDateString(),
        header: <Text>Created</Text>,
        primary: true,
      },
      {
        property: 'lead.source',
        header: <Text>Source</Text>,
      },
      {
        property: 'lead.medium',
        header: <Text>Medium</Text>,
      },
      {
        property: 'lead.campaign',
        header: <Text>Campaign</Text>,
      },
      {
        property: 'lead.content',
        header: <Text>Content</Text>,
      },
      {
        property: 'lead.funnelStep.name',
        header: <Text>Funnel Step</Text>,
      },
      {
        property: 'amount',
        render: (payment: IPayment) => (payment.amount / 100).toFixed(2),
        header: <Text>Paid</Text>,
      },
    ]}
    data={payments}
    sortable
  />
);
