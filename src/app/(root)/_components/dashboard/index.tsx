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
      <div className="w-full flex flex-col lg:flex-row lg:gap-8 gap-4 lg:items-center">
        <Title
          text="Dashboard"
          icon={LayoutGrid}
          desc="A centralized dashboard where your coding journey, and progress come together in one place."
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
