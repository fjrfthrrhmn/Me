'use client';
import { ThemeProvider } from 'next-themes';
import React, { HTMLAttributes } from 'react';

type ProvidersProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <ThemeProvider defaultTheme="system" enableSystem storageKey="theme" attribute="class">
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
