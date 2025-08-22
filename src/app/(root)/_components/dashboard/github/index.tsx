'use client';
import { useGithubProfile } from '@/services/hooks/useGithub';
import { USERNAME_GITHUB } from './config';
import GithubProfile from './GithubProfile';
import Calendar from './Calendar';
import EmptyState from '@/components/ui/empty-state';

const DashboardGithub = () => {
  const { data, isLoading, isPending, isError } = useGithubProfile(USERNAME_GITHUB);

  if (isError) {
    return <EmptyState />;
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-4 lg:gap-y-0 lg:gap-x-2">
        <GithubProfile data={data} loading={isLoading || isPending} />
        <Calendar loading={isLoading || isPending} />
      </div>
    </>
  );
};

export default DashboardGithub;
