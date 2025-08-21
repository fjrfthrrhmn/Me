import { ClipboardCheck, Crosshair, Hourglass, Trophy } from 'lucide-react';
import type { ResMonkeyTypeProfile } from '@/services/types/monkeytype';
import { formatNumber, formatTypingTime } from './utils';

export interface StatConfig {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string | number;
}

// 
export const buildStatsConfig = (data: ResMonkeyTypeProfile['data'], bestWPM: number, bestAccuracy: number): StatConfig[] => {
  return [
    {
      icon: Trophy,
      label: 'Best WPM',
      value: bestWPM,
    },
    {
      icon: Crosshair,
      label: 'Accuracy',
      value: bestAccuracy,
    },
    {
      icon: ClipboardCheck,
      label: 'Completed Tests',
      value: formatNumber(data.typingStats.completedTests),
    },
    {
      icon: Hourglass,
      label: 'Time Playing',
      value: formatTypingTime(data.typingStats.timeTyping),
    },
  ];
};
