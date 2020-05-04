import React from 'react';

import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { environment } from '../common/relayEnvironment';
import ClientsTable from './ClientsTable';

export const Clients = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query ClientsScreenQuery {
        clients {
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
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      if (error) {
        return <div>Error!</div>;
      }

      if (!props) {
        return <div>Loading...</div>;
      }

      const clients = (props as any).clients.edges.map((e) => {
        const client = { ...e.node };

        const lead = { ...client.leads.edges[0]?.node };
        if (lead) {
          lead.funnelStep = lead.funnelStep?.name;
        }
        client.lead = lead;

        client.amountPaid =
          client.payments.edges
            .map((e) => e.node.amountPaid)
            .reduce((summ, cur) => summ + cur, 0) / 100;

        return client;
      });

      return (
        <div>
          <h1>Clients</h1>
          <ClientsTable clients={clients} />
        </div>
      );
    }}
  />
);
