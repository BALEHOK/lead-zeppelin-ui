import React from 'react';
import { TFunction1 } from './functionTypes';

export function mapGqlProps<InProps, OutProps>(
  Component: React.ComponentType<OutProps>,
  dataMapper: TFunction1<InProps, OutProps>
) {
  return (props: InProps) => <Component {...dataMapper(props)} />;
}
