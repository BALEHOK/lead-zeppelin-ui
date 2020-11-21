import { DataTable, Text } from 'grommet';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { fromCentsToDollars } from 'src/common/fromCentsToDollars';
import { ChannelAnalyticsData } from './channelAnalyticsData';

interface IProps {
  analyticsData: ChannelAnalyticsData[];
}

export const AnalyticsList = ({ analyticsData }: IProps) => (
  <DataTable<ChannelAnalyticsData>
    className={useStyles().table}
    columns={[
      {
        property: 'channel',
        header: <Text>Channel</Text>,
        primary: true,
        size: 'large',
      },
      {
        property: 'ua',
        header: <Text>User acquisition</Text>,
      },
      {
        property: 'buyers',
        header: <Text>Buyers</Text>,
      },
      {
        property: 'revenue',
        render: (channelPayment) => fromCentsToDollars(channelPayment.revenue),
        header: <Text>Revenue</Text>,
      },
      {
        property: 'ac',
        render: (channelPayment) => fromCentsToDollars(channelPayment.ac),
        header: <Text>Acquisition cost</Text>,
      },
    ]}
    data={analyticsData}
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
