import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Props } from 'react-github-calendar';

export const USERNAME_GITHUB = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? 'jhondoe';

const COLORS_THEME = {
  light: ['#f0fdfa', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6'],
  dark: ['#001e1a', '#134e4a', '#0d9488', '#2dd4bf', '#5eead4'],
};

export const configCalendar: Props = {
  username: USERNAME_GITHUB,
  hideTotalCount: true,
  showWeekdayLabels: true,
  blockRadius: 3,
  transformData: data => data,
  theme: COLORS_THEME,
  renderBlock: (block, activity) => {
    if (!activity) return block;

    const { count, date } = activity;
    const label = count > 0 ? `${count} contributions on ${date}` : `No contributions on ${date}`;

    return (
      <Tooltip>
        <TooltipTrigger asChild>{block}</TooltipTrigger>
        {count > 0 && <TooltipContent>{label}</TooltipContent>}
      </Tooltip>
    );
  },
};
