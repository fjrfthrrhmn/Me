'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import React, { HTMLAttributes, useState } from 'react';

type ProvidersProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {},
        },
      })
  );

  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider disableTransitionOnChange defaultTheme="system" enableSystem storageKey="theme" attribute="class">
          {children}
        </ThemeProvider>
      </QueryClientProvider>
  );
};

export default Providers;
