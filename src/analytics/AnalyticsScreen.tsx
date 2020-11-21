import React, { useEffect } from 'react';
import { TFunction } from 'src/common/lib/functionTypes';
import { IPayment } from 'src/common/state/appContext';
import { withContext } from 'src/common/state/withContext';
import { AnalyticsList } from './AnalyticsList';

interface IProps {
  analyticsData: IPayment[];
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

  return <AnalyticsList payments={analyticsData} />;
};

export default withContext(AnalyticsScreen);
