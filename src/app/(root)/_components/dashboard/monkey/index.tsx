import { useMonkeyTypeProfile } from '@/services/hooks/useMonkeyType';
import MonkeyProfile from './MonkeyProfile';
import PersonalBests from './PersonalBests';
import EmptyState from '@/components/ui/empty-state';
import { Skeleton } from '@/components/ui/skeleton';

const DashboardMonkeyType = () => {
  const { data, isLoading, isPending } = useMonkeyTypeProfile('jessenz');

  if (!data) return <EmptyState />;
  if ((isLoading || isPending)) return <Loader />;

  return (
    <main className="grid grid-rows-2 lg:grid-rows-2 gap-2">
      <MonkeyProfile data={data} />
      <PersonalBests personalBests={data.personalBests} />
    </main>
  );
};

export default DashboardMonkeyType;

const Loader = () => {
  return (
    <main className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-6 items-center gap-2">
        <div className="p-4 h-full flex gap-2 items-center w-full border-2 rounded-2xl lg:col-span-2">
          <Skeleton className="rounded-2xl min-w-20 h-20" />
          <div className="flex flex-col gap-2">
            <Skeleton className="rounded-2xl w-32 h-4" />
            <Skeleton className="rounded-2xl w-24 h-4" />
          </div>
        </div>

        <div className="p-2 border-2 lg:col-span-4 rounded-2xl">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(3)].map((_, index) => {
              return (
                <div key={index}>
                  <Skeleton className="w-full h-28" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {[...Array(2)].map((_, index) => {
          return (
            <div key={index} className="p-2 border-2 rounded-2xl grid grid-cols-3 gap-2">
              {[...Array(3)].map((_, index) => {
                return (
                  <div key={index}>
                    <Skeleton className="w-full h-28" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
};
