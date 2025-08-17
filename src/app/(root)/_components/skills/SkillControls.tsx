'use client';
import { MonitorSmartphoneIcon, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSkillStore } from './SkillStore';

const TOGGLES = [
  {
    name: 'stacks',
    label: 'Skills Stacks',
    icon: MonitorSmartphoneIcon,
  },
  {
    name: 'tools',
    label: 'Skills Tools',
    icon: Palette,
  },
];

const SkillsControls = () => {
  const skillType = useSkillStore(state => state.skillType);
  const setSkillType = useSkillStore(state => state.setSkillType);

  return (
    <div className="w-full h-full grid grid-cols-2 gap-2 items-center">
      {TOGGLES.map(item => {
        return (
          <Button
            key={item.name}
            aria-label={item.label}
            size={'icon'}
            className="w-full capitalize"
            onClick={() => setSkillType(item.name as 'stacks' | 'tools')}
            variant={item.name === skillType ? 'default' : 'outline'}
          >
            <item.icon size={20} />
            <span className="hidden sm:block">{item.name}</span>
            <span className="sr-only">{item.name}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default SkillsControls;
