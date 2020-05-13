import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { environment } from '../common/relayEnvironment';
import FunnelView from './Funnels';

const ClientsScreen = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query FunnelsScreenQuery {
        account {
          id
          funnels(first: 2147483647) {
            ...Funnels_funnels
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

      return <FunnelView funnels={(props as any).account.funnels} />;
    }}
  />
);

export default ClientsScreen;
