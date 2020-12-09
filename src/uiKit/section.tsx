import { Box, Heading, Text } from 'grommet';
import React, { ReactNode } from 'react';

interface IProps {
  heading: string;
  subHeading?: string;
  children: ReactNode;
}

export const Section = ({ heading, subHeading, children }: IProps) => (
  <Box align="start" gap="medium">
    <Box>
      <Heading level="2" margin={{ top: 'none', bottom: 'none' }}>
        {heading}
      </Heading>
      {!!subHeading && <Text>{subHeading}</Text>}
    </Box>
    {children}
  </Box>
);
