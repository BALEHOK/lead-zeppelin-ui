import React from 'react';
import { DataTable, Text } from 'grommet';

export const ClientsTable = ({ clients }) => (
  <DataTable
    columns={[
      {
        property: 'name',
        header: <Text>Name</Text>,
      },
      {
        property: 'email',
        header: <Text>Email</Text>,
        primary: true,
      },
      {
        property: 'lead.source',
        header: <Text>Source</Text>,
      },
      {
        property: 'lead.campaign',
        header: <Text>Campaign</Text>,
      },
      {
        property: 'lead.funnelStep',
        header: <Text>Funnel Step</Text>,
      },
      {
        property: 'amountPaid',
        header: <Text>Paid</Text>,
      },
    ]}
    data={clients}
  />
);

export default ClientsTable;
