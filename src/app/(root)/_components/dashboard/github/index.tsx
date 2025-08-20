'use client';
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { configCalendar } from './config';
import { GithubProfile } from './GithubProfile';
import { useGithubProfile } from '@/services/hooks/useGithub';

const USERNAME = 'fjrfthrrhmn'

const DashboardGithub = () => {
  const { theme } = useTheme();
  const { data } = useGithubProfile(USERNAME)

  console.log(data)

  if (!data) return null;

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <GithubProfile data={data} />

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
