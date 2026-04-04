'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  );
}
