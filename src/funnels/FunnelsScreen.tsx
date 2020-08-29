import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import { storage } from 'src/common/lib/storage';
import { environment } from '../common/relayEnvironment';
import FunnelView from './Funnels';

const ClientsScreen = () => {
  const account = storage.get('lz_account');

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query FunnelsScreenQuery($code: String!) {
          account(code: $code) {
            funnels {
              ...Funnels_funnels
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

        return <FunnelView funnels={(props as any).account.funnels} />;
      }}
    />
  );
};

export default ClientsScreen;
