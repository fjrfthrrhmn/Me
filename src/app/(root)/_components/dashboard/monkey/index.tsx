import { useMonkeyTypeProfile } from '@/services/hooks/useMonkeyType';
import MonkeyProfile from './MonkeyProfile';
import PersonalBests from './PersonalBests';

const DashboardMonkeyType = () => {
  const { data } = useMonkeyTypeProfile('jessenz');

  if(!data) return null

  return (
    <main className="grid grid-rows-2 lg:grid-rows-2 gap-4">
      <MonkeyProfile data={data} />
      <PersonalBests personalBests={data.personalBests} />
    </main>
  );
};

export default DashboardMonkeyType;
