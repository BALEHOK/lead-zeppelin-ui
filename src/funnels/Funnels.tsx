import React, { useState } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { mapGqlProps } from 'src/common/lib/mapGqlProps';
import { Nav, Select, Text } from 'grommet';
import { Funnels_funnels } from './__generated__/Funnels_funnels.graphql';

export const Funnels = ({ funnels }) => {
  const [selectedFunnel, setSelectedFunnel] = useState(funnels[0]);

  const options = funnels.map((f) => f.name);

  return (
    <Nav direction="row">
      <Text>Funnel</Text>
      <Select
        options={options}
        value={selectedFunnel?.name}
        onChange={({ option }) =>
          setSelectedFunnel(funnels.find((f) => f.name === option))
        }
      />
    </Nav>
  );
};

const funnelsMapper = (props) => {
  const funnels = (props.funnels as Funnels_funnels).edges.map((e) => {
    const rawFunnel = e?.node;
    const rawSteps = rawFunnel?.steps?.edges.map((se) => se?.node);
    const steps = rawSteps?.map((rs) => ({
      id: rs?.id,
      name: rs?.name,
      // TODO refactor, aggregate on server
      leadsCount: rs?.leads?.edges.length,
      paid: rs?.payments?.edges
        .map((e) => e?.node?.amountPaid)
        .reduce((sum, cur) => (sum || 0) + (cur || 0), 0),
    }));

    const funnel = {
      id: rawFunnel?.id,
      name: rawFunnel?.name,
      steps,
    } as any;

    return funnel;
  });

  return { ...props, funnels };
};

export default createFragmentContainer(mapGqlProps(Funnels, funnelsMapper), {
  funnels: graphql`
    fragment Funnels_funnels on FunnelObjectConnection {
      edges {
        node {
          id
          name
          steps {
            edges {
              node {
                id
                name
                leads {
                  edges {
                    node {
                      id
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
      }
    }
  `,
});
