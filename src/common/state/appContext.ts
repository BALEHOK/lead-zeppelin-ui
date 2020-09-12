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

export interface ILead {
  id: string;
  clientId: string;
  created: Date;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  funnelStep: IFunnelStep;
}

export interface IPayment {
  id: string;
  amount: number;
  created: Date;
  lead: ILead;
}

export interface IAppState {
  account: string;
  setAccount: TFunction1<string>;
  funnels: IFunnel[];
  getFunnels: TFunction;
  payments: IPayment[];
  getPayments: TFunction;
}

export const AppContext = React.createContext({} as IAppState);
