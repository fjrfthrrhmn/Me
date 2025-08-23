import { cn } from '@/lib/utils';
import React from 'react';

interface CardCustomProps {
  children: React.ReactNode,
  className?: string
}

export const CardCustom = ({ children, className }: CardCustomProps) => {
  return <div className={cn('border rounded-xl p-4 bg-card', className)}>{children}</div>;
};
