'use client';
import { Container } from '@/components/ui/main';
import { Title } from '@/components/ui/title';
import { LayoutGrid } from 'lucide-react';
import { useDashboardStore } from './DashboardStore';
import { lazy } from 'react';
import DashboardControls from './DashboardControls';
import DashboardMonkeyType from './monkey';

const DashboardGithub = lazy(() => import('./github'));

const Dashboard = () => {
  const dashboardType = useDashboardStore(state => state.dashboardType);

  return (
    <Container className="space-y-10">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
        <Title
          text="Dashboard"
          icon={LayoutGrid}
          desc="A centralized dashboard where your coding journey, and progress come together in one place."
          className='col-span-2'
       />
        <DashboardControls />
      </div>

      <div className={dashboardType === 'github' ? 'block' : 'hidden'}>
        <DashboardGithub />
      </div>
      <div className={dashboardType === 'monkeyType' ? 'block' : 'hidden'}>
        <DashboardMonkeyType />
      </div>
    </Container>
  );
};

export default Dashboard;
