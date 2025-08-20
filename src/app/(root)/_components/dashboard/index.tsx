import { Container } from '@/components/ui/main';
import { Title } from '@/components/ui/title';
import { LayoutGrid } from 'lucide-react';
import DashboardGithub from './github';

const Dashboard = () => {
  return (
    <Container className="space-y-10">
      <div className="flex justify-between items-center">
        <Title text="Dashboard" desc="lotem ipsum dolor" icon={LayoutGrid} />
        
        <div className="flex gap-2">
          <span>Github</span>
          <span>MonkeyType</span>
        </div>
      </div>

      <DashboardGithub />
    </Container>
  );
};

export default Dashboard;
