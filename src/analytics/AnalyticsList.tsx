import { DataTable, Text } from 'grommet';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { fromCentsToDollars } from 'src/common/fromCentsToDollars';
import { TFunction2 } from 'src/common/lib/functionTypes';
import { AcquisitionCostCell } from './AcquisitionCostCell';
import { ChannelAnalyticsData } from './channelAnalyticsData';

interface IProps {
  analyticsData: ChannelAnalyticsData[];
  updateChannelAc: TFunction2<string, number>;
}

export const AnalyticsList = ({ analyticsData, updateChannelAc }: IProps) => (
  <DataTable<ChannelAnalyticsData>
    className={useStyles().table}
    columns={[
      {
        property: 'channelLabel',
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
        render: (channelPayment) => (
          <AcquisitionCostCell
            ac={channelPayment.ac}
            channel={channelPayment.channel}
            updateChannelAc={updateChannelAc}
          />
        ),
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
