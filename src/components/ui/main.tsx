import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  padding?: 'py-16' | 'py-20' 
}

export const Container = ({ children, className, padding }: ContainerProps) => {
  return (
    <>
      <div className={cn('container mx-auto px-4', padding, className)}>{children}</div>
    </>
  );
};
