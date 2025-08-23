import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Typography from './typography';

interface KanbanGridProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  className?: string;
}

interface KanbanCardProps extends ComponentPropsWithoutRef<'div'> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const KanbanGrid = ({ children, className, ...props }: KanbanGridProps) => {
  return (
    <div className={cn('grid w-full auto-rows-[22rem] grid-cols-3 gap-2', className)} {...props}>
      {children}
    </div>
  );
};

const KanbanCard = ({ name, className, background, Icon, description, href, cta, ...props }: KanbanCardProps) => (
  <div
    key={name}
    className={cn('group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl', 'bg-card border-2', className)}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 transition-all duration-300 lg:group-hover:-translate-y-10">
        <Icon className="h-10 w-10 origin-left transform-gpu text-zinc-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <Typography.Title variant="5/black">{name}</Typography.Title>
        <Typography.Text variant="md/normal" className="max-w-lg">
          {description}
        </Typography.Text>
      </div>

      <div
        className={cn(
          'lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
        )}
      >
        <Button variant="link" asChild size="sm" className="pointer-events-auto p-0">
          <Link href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </Link>
        </Button>
      </div>
    </div>

    <div
      className={cn(
        'hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
      )}
    >
      <Button variant="link" asChild size="sm" className="pointer-events-auto p-0">
        <Link href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </Link>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-card/10" />
  </div>
);

export { KanbanCard, KanbanGrid };
