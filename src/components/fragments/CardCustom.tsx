import { cn } from '@/lib/utils';
import React from 'react';

interface CardCustomProps {
  children: React.ReactNode,
  className?: string
}

export const CardCustom = ({ children, className }: CardCustomProps) => {
  return <div className={cn('border rounded-2xl p-4 bg-secondary/60', className)}>{children}</div>;
};
