'use client';
import { CardCustom } from '@/components/fragments/CardCustom';
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { configCalendar } from './config';
import { Skeleton } from '@/components/ui/skeleton';

const Calendar = ({ loading }: { loading: boolean }) => {
  const { theme } = useTheme();

  if (loading) return <Loader />;

  return (
    <CardCustom className="col-span-3 border p-4 rounded-2xl h-max">
      <div className="scrollable">
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
            scrollbarColor: theme === 'dark' ? '#282828 transparent' : '#e4e4e7 transparent',
          }}
        />
      </div>
    </CardCustom>
  );
};

export default Calendar;

const Loader = () => {
  return (
    <Skeleton className="col-span-3 border p-4 rounded-2xl h-full">
      <div className="flex gap-2">
        <div className="h-6 w-12 bg-background rounded-2xl mb-4" />
        <div className="h-6 w-40 bg-background rounded-2xl mb-4" />
      </div>
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: 140 }).map((_, i) => (
          <div key={i} className="h-4 w-4 bg-background rounded" />
        ))}
      </div>
    </Skeleton>
  );
};
