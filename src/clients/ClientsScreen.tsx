import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { environment } from '../common/relayEnvironment';
import ClientsTable from './ClientsTable';

const ClientsScreen = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query ClientsScreenQuery {
        account {
          id
          clients(first: 2147483647) {
            ...ClientsTable_clients
          }
        }
        clients(first: 2147483647) {
          edges {
            node {
              id
              name
              email
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

      return <ClientsTable clients={(props as any).account.clients} />;
    }}
  />
);

export default ClientsScreen;
