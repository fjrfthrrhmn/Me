'use client';
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { configCalendar } from './config';
import { GithubProfile } from './GithubProfile';
import { useGithubProfile } from '@/services/hooks/useGithub';

const USERNAME = 'fjrfthrrhmn'

const DashboardGithub = () => {
  const { theme } = useTheme();
  const { data, isLoading, isPending } = useGithubProfile(USERNAME)

  console.log(data)

  // add condition if error

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-4 lg:gap-y-0 lg:gap-x-2">
        <GithubProfile data={data} loading={isLoading || isPending}  />

        <div className="col-span-3 border p-4 rounded-2xl h-44">
          <GitHubCalendar
            transformData={data => data}
            colorScheme={theme === 'dark' ? 'dark' : 'light'}
            hideTotalCount
            {...configCalendar}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardGithub;
