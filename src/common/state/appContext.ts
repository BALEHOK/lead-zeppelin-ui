import React from 'react';
import { TFunction, TFunction1 } from '../lib/functionTypes';

export interface IAccount {
  name: string;
  code: string;
  // funnels: IFunnel[]
  // clients: IClient[]
  // payments: IPayment[]
}
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
  payments: IPayment[];
}

export interface IPayment {
  id: string;
  amount: number;
  created: Date;
  lead: ILead;
}

export interface IClient {
  id: string;
  leads: ILead[];
}

export interface IAppState {
  account: IAccount;
  setAccount: TFunction1<IAccount>;
  clients: IClient[];
  getClients: TFunction;
  funnels: IFunnel[];
  getFunnels: TFunction;
  payments: IPayment[];
  getPayments: TFunction;
}

export const AppContext = React.createContext({} as IAppState);
