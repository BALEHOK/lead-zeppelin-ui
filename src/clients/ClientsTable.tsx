import React from 'react';
import { DataTable, Text } from 'grommet';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { ClientsTable_clients } from './__generated__/ClientsTable_clients.graphql';
import { mapGqlProps } from '../common/lib/mapGqlProps';

export const ClientsTable = ({ clients }) => (
  <DataTable
    columns={[
      {
        property: 'name',
        header: <Text>Name</Text>,
      },
      {
        property: 'email',
        header: <Text>Email</Text>,
        primary: true,
      },
      {
        property: 'source',
        header: <Text>Source</Text>,
      },
      {
        property: 'campaign',
        header: <Text>Campaign</Text>,
      },
      {
        property: 'funnelStep',
        header: <Text>Funnel Step</Text>,
      },
      {
        property: 'amountPaid',
        header: <Text>Paid</Text>,
      },
    ]}
    data={clients}
    sortable
  />
);

const clientsMapper = (props) => {
  const clients = (props.clients as ClientsTable_clients).edges.map((e) => {
    const rawClient = e?.node;
    const rawLead = rawClient?.leads?.edges[0]?.node;
    const amountPaid =
      (rawClient?.payments?.edges || [])
        .map((e) => e?.node?.amountPaid || 0)
        .reduce((summ, cur) => summ + cur, 0) / 100;

    const client = {
      id: rawClient?.id,
      name: rawClient?.name,
      email: rawClient?.email,
      source: rawLead?.source,
      campaign: rawLead?.campaign,
      funnelStep: rawLead?.funnelStep?.name,
      amountPaid,
    } as any;

    return client;
  });

  return { ...props, clients };
};

export default createFragmentContainer(
  mapGqlProps(ClientsTable, clientsMapper),
  {
    clients: graphql`
      fragment ClientsTable_clients on ClientObjectConnection {
        edges {
          node {
            id
            name
            email
            leads {
              edges {
                node {
                  id
                  source
                  campaign
                  funnelStep {
                    name
                  }
                }
              }
            }
            payments {
              edges {
                node {
                  id
                  amountPaid
                }
              }
            }
          }
        }
      }
    `,
  }
);
