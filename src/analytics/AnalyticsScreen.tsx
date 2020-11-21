import React, { useEffect } from 'react';
import { TFunction, TFunction2 } from 'src/common/lib/functionTypes';
import { withContext } from 'src/common/state/withContext';
import { AnalyticsList } from './AnalyticsList';
import { ChannelAnalyticsData } from './channelAnalyticsData';

interface IProps {
  analyticsData: ChannelAnalyticsData[];
  loadAnalytics: TFunction;
  updateChannelAc: TFunction2<string, number>;
}

const AnalyticsScreen = ({
  analyticsData,
  loadAnalytics,
  updateChannelAc,
}: IProps) => {
  useEffect(() => {
    if (!analyticsData?.length) {
      loadAnalytics();
    }
  }, []);

  if (!analyticsData?.length) {
    return <div>Loading...</div>;
  }

  return (
    <AnalyticsList
      analyticsData={analyticsData}
      updateChannelAc={updateChannelAc}
    />
  );
};

export default withContext(AnalyticsScreen);
