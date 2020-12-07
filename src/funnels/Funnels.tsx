import { Box, List, Select, Text } from 'grommet';
import React, { useState } from 'react';
import { FunnelType } from 'src/common/api/graphql-zeus';

interface IProps {
  funnels: FunnelType[];
}

export const Funnels = ({ funnels }: IProps) => {
  const [selectedFunnel, setSelectedFunnel] = useState(funnels[0]);

  const options = funnels.map((f) => f.name);

  return (
    <Box align="center" gap="large">
      <Box align="center" justify="center" direction="row" gap="medium">
        <Text>Funnel</Text>
        <Select
          options={options}
          value={selectedFunnel?.name}
          onChange={({ option }) =>
            setSelectedFunnel(funnels.find((f) => f.name === option))
          }
        />
      </Box>
      <List
        data={selectedFunnel?.steps.map((step) => ({ name: step.name }))}
        pad="medium"
      />
    </Box>
  );
};

export default Funnels;
