import { Box, FormField, Text, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import {
  AnalyticsData,
  ChannelAnalyticsData,
} from 'src/analytics/channelAnalyticsData';
import { TFunction } from 'src/common/lib/functionTypes';
import { withContext } from 'src/common/state/withContext';
import Loader from 'src/uiKit/loader/Loader';

interface IProps {
  analyticsData: ChannelAnalyticsData[];
  loadAnalytics: TFunction;
}

const UnitScreen = ({ analyticsData, loadAnalytics }: IProps) => {
  const [cogs, setCogs] = useState(0);
  const [ac, setAc] = useState<number>(0);

  useEffect(() => {
    if (!analyticsData?.length) {
      loadAnalytics();
    }
  }, []);

  const aggregatedAnalytics = (analyticsData || []).reduce(
    (total, cur) => {
      total.ua += cur.ua;
      total.buyers += cur.buyers;
      total.payments += cur.payments;
      total.revenue += cur.revenue;
      total.ac += cur.ac;
      return total;
    },
    {
      ua: 0,
      buyers: 0,
      payments: 0,
      revenue: 0,
      ac: 0,
    } as AnalyticsData
  );

  useEffect(() => {
    aggregatedAnalytics?.ac && setAc(0.01 * aggregatedAnalytics.ac);
  }, [analyticsData]);

  if (!analyticsData?.length) {
    return <Loader />;
  }

  const revenue = 0.01 * aggregatedAnalytics.revenue;
  const avp = revenue / aggregatedAnalytics.payments;
  const cpa = ac / aggregatedAnalytics.ua;
  const apc = aggregatedAnalytics.payments / aggregatedAnalytics.buyers;
  const arpc = (avp - cogs) * apc;
  const c1 = aggregatedAnalytics.buyers / aggregatedAnalytics.ua;
  const arpu = arpc * c1;
  const cm = aggregatedAnalytics.ua * (arpu - cpa);

  return (
    <Box gap="large">
      <Box align="start">
        <Text>Enter the following values</Text>
        <FormField label="COGS" help="Cost of goods sold">
          <TextInput
            value={cogs}
            onChange={(event) => setCogs(Number(event.target.value))}
          />
        </FormField>
        <FormField label="AC" help="Acquisition cost (marketing budget)">
          <TextInput
            value={ac}
            onChange={(event) => setAc(Number(event.target.value))}
          />
        </FormField>
      </Box>
      <Box align="start">
        <Text>Here's how your business behave</Text>
        <FormField label="UA" help="User acquisition">
          <Text margin="small">{aggregatedAnalytics.ua}</Text>
        </FormField>
        <FormField label="B" help="Buyers">
          <Text margin="small">{aggregatedAnalytics.buyers}</Text>
        </FormField>
        <FormField label="C1" help="Convertion to first purchase">
          <Text margin="small">{(100 * c1).toFixed(3)}%</Text>
        </FormField>
        <FormField label="Revenue" help="Total money received">
          <Text margin="small">{revenue.toFixed(2)}</Text>
        </FormField>
        <FormField label="AVP" help="Average price">
          <Text margin="small">{avp.toFixed(3)}</Text>
        </FormField>
        <FormField label="APC" help="Average payment count">
          <Text margin="small">{apc.toFixed(3)}</Text>
        </FormField>
        <FormField label="CM" help="Contribution margin">
          <Text margin="small">{cm.toFixed(2)}</Text>
        </FormField>
      </Box>
    </Box>
  );
};

export default withContext(UnitScreen as any);
