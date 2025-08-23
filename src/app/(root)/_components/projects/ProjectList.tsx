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
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {[...Array(6)].map((_, index) => {
          return (
            <div key={index} className="space-y-4 border rounded-2xl p-2 pb-4">
              <div className="relative group overflow-hidden rounded-t-2xl">
                <Skeleton className="w-full h-44 rounded-t-2xl" />
              </div>

              <div className="flex flex-col gap-2">
                <Skeleton className="w-4/5 h-4" />
                <Skeleton className="w-2/5 h-4" />
              </div>
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
        {[...Array(6)].map((_, index) => {
          return (
            <div key={index} className="border-2 p-2 rounded-3xl">
              <Skeleton className={`w-full h-60`} />
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
        return <ProjectDesignCard key={item.id} {...item} />;
      })}
    </main>
  );
};
