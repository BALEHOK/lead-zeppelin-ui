import React from 'react';
import { ChannelAnalyticsData } from 'src/analytics/channelAnalyticsData';
import { AccountType, FunnelType } from '../api/graphql-zeus';
import { TFunction, TFunction1 } from '../lib/functionTypes';

export interface IAppState {
  account: AccountType;
  setAccount: TFunction1<AccountType>;
  funnels: FunnelType[];
  getFunnels: TFunction;
  analyticsData: ChannelAnalyticsData[];
  loadAnalytics: TFunction;
  updateChannelAc: (channel: string, ac: number) => void;
}

export const AppContext = React.createContext({} as IAppState);
