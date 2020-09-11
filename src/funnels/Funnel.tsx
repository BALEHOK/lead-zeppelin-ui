import React from 'react';
import { IFunnel } from 'src/common/state/appContext';

interface IProps {
  funnel: IFunnel;
}

export const Funnel = ({ funnel }: IProps) => (
  <div>
    {funnel.name}
    <ul>
      {funnel.steps.map((step) => (
        <li key={step.id}>{step.name}</li>
      ))}
    </ul>
  </div>
);
