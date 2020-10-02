import { Box } from 'grommet';
import React from 'react';
import { PieChart } from './PieChart';

const clients = {
  users: 526,
  customers: 35,
};

const purchaseCount = [clients.users - clients.customers, 23, 9, 3];
export const Dashboard = () => (
  <Box
    align="center"
    justify="center"
    direction="row"
    gap="medium"
    height="150px"
  >
    <PieChart
      customColor
      data={[
        {
          id: 'cust',
          label: 'paying customers',
          value: clients.customers,
          color: '#60CDBA',
        },
        {
          id: 'all',
          label: 'never bought',
          value: clients.users - clients.customers,
          color: 'rgb(233, 193, 159)',
        },
      ]}
    />
    <PieChart
      data={purchaseCount.map((count, index) => ({
        id: index,
        label: `${index} payments`,
        value: count,
      }))}
    />
  </Box>
);
