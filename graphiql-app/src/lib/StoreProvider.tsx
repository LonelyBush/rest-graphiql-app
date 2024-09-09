import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

interface StoreProviderProps {
  children: React.ReactNode;
  store?: AppStore;
}

function StoreProvider({ children, store: externalStore }: StoreProviderProps) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = externalStore || makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

StoreProvider.defaultProps = {
  store: undefined,
};

export default StoreProvider;
