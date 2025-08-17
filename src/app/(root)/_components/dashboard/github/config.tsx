import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Props } from 'react-github-calendar';

// process.env.NODE_ENV ||
const USERNAME = 'fjrfthrrhmn';

export const configCalendar: Props = {
  username: USERNAME,
  hideTotalCount: true,
  showWeekdayLabels: true,
  blockRadius: 3,
  transformData: data => data,
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
