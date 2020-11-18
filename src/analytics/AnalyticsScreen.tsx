import React, { useEffect } from 'react';
import { TFunction } from 'src/common/lib/functionTypes';
import { IPayment } from 'src/common/state/appContext';
import { withContext } from 'src/common/state/withContext';
import { AnalyticsList } from './AnalyticsList';

interface IProps {
  payments: IPayment[];
  getPayments: TFunction;
}

const AnalyticsScreen = ({ payments, getPayments }: IProps) => {
  useEffect(() => {
    if (!payments?.length) {
      getPayments();
    }
  }, []);

  if (!payments?.length) {
    return <div>Loading...</div>;
  }

  return <AnalyticsList payments={payments} />;
};

export default withContext(AnalyticsScreen);
