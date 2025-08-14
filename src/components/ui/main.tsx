import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <>
      <div className={cn('container mx-auto px-4', className)}>{children}</div>
    </>
  );
};
