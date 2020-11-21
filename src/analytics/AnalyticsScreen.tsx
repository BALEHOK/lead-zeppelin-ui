import React, { useEffect } from 'react';
import { TFunction } from 'src/common/lib/functionTypes';
import { withContext } from 'src/common/state/withContext';
import { AnalyticsList } from './AnalyticsList';
import { ChannelAnalyticsData } from './channelAnalyticsData';

interface IProps {
  analyticsData: ChannelAnalyticsData[];
  loadAnalytics: TFunction;
}

const AnalyticsScreen = ({ analyticsData, loadAnalytics }: IProps) => {
  useEffect(() => {
    if (!analyticsData?.length) {
      loadAnalytics();
    }
  }, []);

  if (!analyticsData?.length) {
    return <div>Loading...</div>;
  }

  return <AnalyticsList analyticsData={analyticsData} />;
};

export default withContext(AnalyticsScreen);
