import React, { useEffect } from 'react';
import { FunnelType } from 'src/common/api/graphql-zeus';
import { TFunction } from 'src/common/lib/functionTypes';
import { withContext } from 'src/common/state/withContext';
import FunnelView from './Funnels';

interface IProps {
  funnels: FunnelType[];
  getFunnels: TFunction;
}

const FunnelsScreen = ({ funnels, getFunnels }: IProps) => {
  useEffect(() => {
    if (!funnels?.length) {
      getFunnels();
    }
  }, []);

  if (!funnels?.length) {
    return <div>Loading...</div>;
  }

  return <FunnelView funnels={funnels} />;
};

export default withContext(FunnelsScreen);
