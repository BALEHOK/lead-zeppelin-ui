import graphql from 'babel-plugin-relay/macro';
import { Nav, Select, Text } from 'grommet';
import React, { useState } from 'react';
import { createFragmentContainer } from 'react-relay';

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

export default createFragmentContainer(Funnels, {
  funnels: graphql`
    fragment Funnels_funnels on FunnelType {
      id
      name
      steps {
        id
        name
      }
    }
  `,
});
