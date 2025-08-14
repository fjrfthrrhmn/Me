'use client';
import { MonitorSmartphoneIcon, Palette } from 'lucide-react';
import { useProjectStore } from './ProjectStore';
import { Button } from '@/components/ui/button';

const TOGGLES = [
  {
    name: 'website',
    label: 'toggle website',
    icon: MonitorSmartphoneIcon,
  },
  {
    name: 'design',
    label: 'toggle design',
    icon: Palette,
  },
];

const ProjectControls = () => {
  const projectType = useProjectStore(state => state.projectType);
  const setProjectType = useProjectStore(state => state.setProjectType);

  return (
    <div className="w-full h-full grid grid-cols-2 gap-2 items-center">
      {TOGGLES.map(item => {
        return (
          <Button
            key={item.name}
            aria-label={item.label}
            size={'icon'}
            className="w-full capitalize"
            onClick={() => setProjectType(item.name as 'website' | 'design')}
            variant={projectType === item.name ? 'default' : 'outline'}
          >
            <item.icon size={20} />
            <span className='hidden sm:block'>{item.name}</span>
            <span className="sr-only">{item.name}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default ProjectControls;
