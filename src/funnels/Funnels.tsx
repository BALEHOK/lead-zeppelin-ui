import { Nav, Select, Text } from 'grommet';
import React, { useState } from 'react';
import { IFunnel } from 'src/common/state/appContext';

interface IProps {
  funnels: IFunnel[];
}

export const Funnels = ({ funnels }: IProps) => {
  const [selectedFunnel, setSelectedFunnel] = useState(funnels[0]);

  const options = funnels.map((f) => f.name);

  return (
    <Nav direction="row">
      <Text size="large" margin="small">
        Funnel
      </Text>
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

export default Funnels;
