'use client';
import { Container } from '@/components/ui/main';
import { Title } from '@/components/ui/title';
import { LayoutGrid } from 'lucide-react';
import { useDashboardStore } from './DashboardStore';
import DashboardGithub from './github';
import DashboardControls from './DashboardControls';
import DashboardMonkeyType from './monkey';

const Dashboard = () => {
  const dashboardType = useDashboardStore(state => state.dashboardType);

  return (
    <Container className="space-y-10">
      <div className="w-full flex flex-col lg:flex-row gap-4 lg:items-center">
        <Title text="Dashboard" desc="lotem ipsum dolor" icon={LayoutGrid} />
        <DashboardControls />
      </div>

      <div className={dashboardType !== 'github' ? 'hidden' : ''}>
        <DashboardGithub />
      </div>
      <div className={dashboardType !== 'monkeyType' ? 'hidden' : ''}>
        <DashboardMonkeyType />
      </div>
    </Container>
  );
};

export default Dashboard;
