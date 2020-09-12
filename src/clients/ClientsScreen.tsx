import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import { storage } from 'src/common/lib/storage';
import { environment } from '../common/relayEnvironment';
import ClientsTable from './ClientsTable';

const ClientsScreen_ = () => {
  const account = storage.get('lz_account');
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ClientsScreenQuery($code: String!) {
          account(code: $code) {
            clients {
              ...ClientsTable_clients
            }
          }
        }
      `}
      variables={{ code: account }}
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
};
export default ClientsScreen_;
