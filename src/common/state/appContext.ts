import React from 'react';
import { TFunction1 } from '../lib/functionTypes';

export interface IAppState {
  account: string;
  setAccount: TFunction1<string>;
}

export const AppContext = React.createContext({} as IAppState);
