import { IAppState, AppContext } from './appContext';
import React, { ComponentType } from 'react';

export const withContext = <P extends IAppState = IAppState>(
  WrappedComponent: ComponentType<P>
) => (props: Omit<P, keyof IAppState>) => (
  <AppContext.Consumer>
    {(appState: IAppState) => (
      <WrappedComponent {...appState} {...(props as P)} />
    )}
  </AppContext.Consumer>
);
