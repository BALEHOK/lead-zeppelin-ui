import { DataTable, Text } from 'grommet';
import React from 'react';
import { createUseStyles } from 'react-jss';

interface IProps {
  payments: any[];
}

export const AnalyticsList = ({ payments }: IProps) => (
  <DataTable
    className={useStyles().table}
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

const useStyles = createUseStyles({
  table: {
    '& span': {
      display: 'block',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
    },
  },
});
