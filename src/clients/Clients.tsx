import React from 'react';

// import graphql from 'babel-plugin-relay/macro';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from '../common/relayEnvironment';

export const Clients = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query allClients {
        allClients {
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
      console.log(props);
      return <div>Result: {props}</div>;
    }}
  />
);
