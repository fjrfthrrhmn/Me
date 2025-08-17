'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';

interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  size?: 'size-20' | 'size-28' | 'size-16' | 'size-32';
  rounded?: 'rounded-full' | 'rounded-2xl' | 'rounded-xl';
}

function Avatar({ className, size = 'size-20', rounded, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn('relative flex shrink-0 overflow-hidden', 'shadow-xl border-4 ', size, rounded, className)}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return <AvatarPrimitive.Image data-slot="avatar-image" className={cn('aspect-square size-full', className)} {...props} />;
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn('bg-muted flex size-full items-center justify-center rounded-full', className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
