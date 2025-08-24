import { VariantProps } from 'class-variance-authority';
import { Button, buttonVariants } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';

type ButtonCustomProps = {
  type?: 'external' | 'internal';
  url: string;
  icon?: IconType;
  children: React.ReactNode;
  reverse?: boolean;
} & VariantProps<typeof buttonVariants>;

export const ButtonCustom = ({
  variant = 'default',
  type = 'external',
  size,
  url,
  icon: Icon = ArrowRight,
  children,
  reverse = false,
}: ButtonCustomProps) => {
  const isExternal = type === 'external';

  const classes = {
    parent: cn('group hover:scale-105 transition duration-200', reverse && 'flex-row-reverse'),
    icon: cn('ml-2 transition duration-200', isExternal ? 'group-hover:-rotate-45' : 'group-hover:rotate-90'),
  };

  return (
    <Button variant={variant} size={size} asChild className={classes.parent}>
      <Link
        href={url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-2"
      >
        {children}
        <Icon strokeWidth={2.5} className={classes.icon} />
      </Link>
    </Button>
  );
};
