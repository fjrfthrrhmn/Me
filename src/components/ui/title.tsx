import { LucideIcon } from 'lucide-react';
import Typography from './typography';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

interface TitleProps {
  text: string;
  desc: string;
  icon: LucideIcon | IconType;
  className?: string
}

export const Title = ({ text, desc, icon: IconComponent, className }: TitleProps) => {
  return (
    <>
      <div className={cn('w-full h-max', className)}>
        <div className="flex gap-2 items-center">
          <IconComponent strokeWidth={3} />
          <Typography.Title variant="4/black">{text}</Typography.Title>
          <span className="sr-only">{text}</span>
        </div>
        <Typography.Text>{desc}</Typography.Text>
      </div>
    </>
  );
};
