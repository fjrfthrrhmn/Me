import { LucideIcon } from 'lucide-react';
import Typography from './typography';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

interface TitleProps {
  text: string;
  desc: string;
  className?: string;
  icon: LucideIcon | IconType;
  strokeWidth?: 1 | 2 | 3;
  iconSize?: 20 | 24 | 28 | 32;
}

export const Title = ({ text, desc, icon: IconComponent, className, strokeWidth = 2, iconSize = 28 }: TitleProps) => {
  return (
    <>
      <div className={cn('w-full sm:h-max h-max', className)}>
        <div className="flex gap-2 items-center group">
          <span className={'group-hover:-translate-x-2 group-hover:-rotate-6 transition duration-300'}>
            <IconComponent strokeWidth={strokeWidth} size={iconSize} />
          </span>
          <Typography.Title variant="4/black">{text}</Typography.Title>
          <span className="sr-only">{text}</span>
        </div>
        <Typography.Text>{desc}</Typography.Text>
      </div>
    </>
  );
};
