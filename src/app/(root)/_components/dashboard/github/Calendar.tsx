'use client';
import { useEffect, useState } from 'react';
import { CardCustom } from '@/components/fragments/CardCustom';
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { configCalendar } from './config';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';

const Calendar = ({ loading }: { loading: boolean }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (loading) return <Loader />;
  if (!mounted) return <Loader />; // prevent hydration mismatch

  return (
    <CardCustom className="col-span-3 border px-4 py-6 rounded-2xl h-full">
      <div className="scrollable flex justify-center items-center h-full">
        <GitHubCalendar
          colorScheme={theme === 'dark' ? 'dark' : 'light'}
          {...configCalendar}
          style={{
            display: 'block',
            overflowX: 'auto',
            overflowY: 'hidden',
            width: '100%',
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'thin',
            scrollbarColor:
              theme === 'dark'
                ? '#282828 transparent'
                : '#e4e4e7 transparent',
          }}
        />
      </div>
    </CardCustom>
  );
};

export default Calendar;

const Loader = () => (
  <div className="col-span-3 border p-2 rounded-2xl h-full">
    <div className="flex gap-2">
      <Skeleton className="h-6 w-1/5 mb-4" />
      <Skeleton className="h-6 w-1/2 mb-4" />
    </div>
    <ScrollArea className="h-max w-full">
      <div className="grid grid-rows-6 grid-flow-col gap-1 w-max">
        {Array.from({ length: 150 }).map((_, i) => {
          const opacities = [
            'opacity-30',
            'opacity-100',
            'opacity-50',
            'opacity-80',
          ];
          return (
            <Skeleton
              key={i}
              className={`h-4 w-4 rounded ${opacities[i % opacities.length]}`}
            />
          );
        })}
      </div>
    </ScrollArea>
  </div>
);
