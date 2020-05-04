import React from 'react';

import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { environment } from '../common/relayEnvironment';
import ClientsTable from './ClientsTable';

export const Clients = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query ClientsQuery {
        clients {
          edges {
            node {
              id
              accountId
              name
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

      return (
        <div>
          <h1>Clients</h1>
          <ClientsTable
            clients={(props as any).clients.edges.map((e) => e.node)}
          />
        </div>
      );
    }}
  />
);
