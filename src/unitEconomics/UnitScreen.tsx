import { Box, FormField, Text, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import { TFunction } from 'src/common/lib/functionTypes';
import { IClient, IPayment } from 'src/common/state/appContext';
import { withContext } from 'src/common/state/withContext';
import Loader from 'src/uiKit/loader/Loader';

interface IProps {
  clients: IClient[];
  getClients: TFunction;
  payments: IPayment[];
  getPayments: TFunction;
}

const UnitScreen = ({ clients, getClients, payments, getPayments }: IProps) => {
  const [cogs, setCogs] = useState(0);
  const [ac, setAc] = useState(0);
  const [ua, setUa] = useState(clients.length);

  useEffect(() => {
    if (!payments?.length) {
      getPayments();
    }

    if (!clients.length) {
      getClients();
    }
  }, []);

  if (!clients.length || !payments?.length) {
    return <Loader />;
  }

  // user = every person reached our product
  // customer = a user which made a purchase
  const customers = clients.filter((client) =>
    client.leads.some((lead) => !!lead.payments?.length)
  );

  const revenue = 0.01 * payments.reduce((sum, cur) => sum + cur.amount, 0);
  const avp = revenue / payments.length;
  const cpa = ac / ua;
  const apc = payments.length / customers.length;
  const arpc = (avp - cogs) * apc;
  const c1 = customers.length / ua;
  const arpu = arpc * c1;
  const cm = ua * (arpu - cpa);

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
        <FormField label="UA" help="User acquisition">
          <TextInput
            value={ua}
            onChange={(event) => setUa(Number(event.target.value))}
          />
        </FormField>
      </Box>
      <Box align="start">
        <Text>Here's how your business behave</Text>
        <FormField label="B" help="Buyers">
          <Text margin="small">{customers.length}</Text>
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

export default withContext(UnitScreen);
