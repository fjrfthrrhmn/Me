import { ProjectItem } from '@/services/types/project';
import { ProjectDesignCard, ProjectWebsiteCard } from './ProjectCard';
import EmptyState from '@/components/ui/empty-state';
import { Skeleton } from '@/components/ui/skeleton';

interface ProjectWebsiteProps {
  data: ProjectItem[];
  loading: boolean;
}

export const ProjectWebsiteList = ({ data, loading }: ProjectWebsiteProps) => {
  if (loading) {
    return (
      <main className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((item, index) => {
          return (
            <div key={index} className="space-y-6 border rounded-xl p-2">
              <div className="relative group overflow-hidden rounded-t-2xl">
                <Skeleton className="w-full h-44 rounded-t-2xl" />
              </div>

              <div className="flex flex-col gap-2">
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-1/2 h-6" />
              </div>

              {/* <div className="flex gap-1 px-4">
                {[...Array(3)].map(item => {
                  return <Skeleton key={item} className="w-1/2 h-4" />;
                })}
              </div> */}
            </div>
          );
        })}
      </main>
    );
  }

  if (!data.length) return <EmptyState />;

  return (
    <main className="grid grid-cols-3 gap-2 gap-y-4">
      {data.map(item => {
        return <ProjectWebsiteCard key={item.id} {...item} />;
      })}
    </main>
  );
};

interface ProjectDesignProps {
  data: any[];
  loading: boolean;
}

export const ProjectDesignList = ({ data, loading }: ProjectDesignProps) => {
  if (loading) {
    return (
      <main className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((item, index) => {
          return <Skeleton key={index} className={`w-full h-60`} />;
        })}
      </main>
    );
  }

  if (!data.length) return <EmptyState />;

  return (
    <main className="grid grid-cols-3 gap-2 gap-y-4">
      {data.map(item => {
        return <ProjectDesignCard key={item.id} {...item} />;
      })}
    </main>
  );
};
