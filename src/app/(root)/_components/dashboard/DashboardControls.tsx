'use client';
import { Code2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDashboardStore } from './DashboardStore';
import { IconBrandGithub } from '@tabler/icons-react';
import { useCallback } from 'react';

const TOGGLES = [
  {
    name: 'github',
    label: 'toggle dashboard github',
    icon: IconBrandGithub,
    disabled: false,
  },
  {
    name: 'monkeyType',
    label: 'toggle dashboard monkey type',
    icon: Zap,
    disabled: false,
  },
] as const;

const DashboardControls = () => {
  const dashboardType = useDashboardStore(state => state.dashboardType);
  const setDashboardType = useDashboardStore(state => state.setDashboardType);

  // toggle dashboard type based on user interaction
  const handleDashboardType = useCallback(
    (item: (typeof TOGGLES)[number]) => {
      if (item.name === dashboardType) return;
      setDashboardType(item.name as (typeof TOGGLES)[number]['name']);
    },
    [setDashboardType, dashboardType]
  );

  return (
    <div className="w-full h-full grid grid-cols-2 gap-4 items-center">
      {TOGGLES.map(item => {
        return (
          <Button
            key={item.name}
            aria-label={item.label}
            size={'icon'}
            disabled={item.disabled}
            className="w-full capitalize"
            onClick={() => handleDashboardType(item)}
            variant={dashboardType === item.name ? 'default' : 'outline'}
          >
            <item.icon size={20} />
            <small className="hidden sm:block text-sm">{item.name}</small>
            <span className="sr-only">{item.name}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default DashboardControls;
