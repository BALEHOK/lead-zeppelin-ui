import React from 'react';
import { TFunction, TFunction1 } from '../lib/functionTypes';

export interface IFunnelStep {
  id: string;
  name: string;
  code: string;
}
export interface IFunnel {
  id: string;
  accountId: string;
  name: string;
  steps: IFunnelStep[];
}

export interface IAppState {
  account: string;
  setAccount: TFunction1<string>;
  funnels: IFunnel[];
  getFunnels: TFunction;
}

export const AppContext = React.createContext({} as IAppState);
