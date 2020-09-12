import React, { useEffect } from 'react';
import { TFunction } from 'src/common/lib/functionTypes';
import { IPayment } from 'src/common/state/appContext';
import { withContext } from 'src/common/state/withContext';
import { PaymentsList } from './PaymentsList';

interface IProps {
  payments: IPayment[];
  getPayments: TFunction;
}

const PaymentsScreen = ({ payments, getPayments }: IProps) => {
  useEffect(() => {
    if (!payments?.length) {
      getPayments();
    }
  }, []);

  if (!payments?.length) {
    return <div>Loading...</div>;
  }

  return <PaymentsList payments={payments} />;
};

export default withContext(PaymentsScreen);
