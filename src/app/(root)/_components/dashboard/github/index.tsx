'use client';
import { useTheme } from 'next-themes';
import GitHubCalendar from 'react-github-calendar';
import { configCalendar } from './config';
import { GithubProfile } from './GithubProfile';

const DashboardGithub = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <GithubProfile className="grid grid-rows-2 gap-2"/>

        <div className="col-span-2 border px-4 py-4 rounded-2xl">
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
