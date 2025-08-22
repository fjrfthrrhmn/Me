import { CardCustom } from '@/components/fragments/CardCustom';
import { NumberTicker } from '@/components/fragments/NumberTicker';
import { type PersonalBestItem, ResMonkeyTypeProfile } from '@/services/types/monkeytype';
import Typography from '@/components/ui/typography';
import { formatDate } from './utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type PersonalBestsProps = Pick<ResMonkeyTypeProfile['data'], 'personalBests'>;

const PersonalBests = ({ personalBests }: PersonalBestsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {Object.entries(personalBests).map(([category, categoryData], index) => {
        return (
          <CardCustom key={category} className="grid grid-cols-3 gap-4">
            {Object.entries(categoryData)
              .slice(1)
              .map(([subCategory, subCategoryData], index) => (
                <PersonalBestItem key={index} value={subCategoryData[0]} category={category} subCategory={subCategory} />
              ))}
          </CardCustom>
        );
      })}
    </div>
  );
};

export default PersonalBests;

export interface PersonalBestItemProps {
  value: PersonalBestItem;
  category: string;
  subCategory: string;
}

const PersonalBestItem = ({ value, category, subCategory }: PersonalBestItemProps) => {
  const stats = {
    wpm: Math.round(value?.wpm ?? 0),
    acc: Math.round(value?.acc ?? 0),
    consistency: Math.round(value?.consistency ?? 0),
    raw: Math.round(value?.raw ?? 0),
    timestamp: formatDate(value?.timestamp ?? Date.now()),
    difficulty: value?.difficulty ?? 'normal',
    language: value?.language ?? 'english',
  };

  const hoverStats = [
    {
      name: 'primary',
      items: [
        {
          label: 'WPM',
          value: stats.wpm,
        },
        {
          label: 'Raw',
          value: stats.raw,
        },
        {
          label: 'Accuracy',
          value: stats.acc + '%',
        },
      ],
    },
    {
      name: 'secondary',
      items: [
        {
          label: 'Consistency',
          value: stats.consistency,
        },
        {
          label: 'Difficulty',
          value: stats.difficulty,
        },
        {
          label: 'Language',
          value: stats.language,
        },
      ],
    },
  ];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center justify-center flex-col *:text-center">
          <Typography.Text variant="xs/normal" className="capitalize">
            {subCategory} {category}
          </Typography.Text>
          <Typography.Title variant="2/black">
            <NumberTicker value={Number(stats.wpm)} className="font-mono text-highlight dark:text-highlight py-2" />
          </Typography.Title>
          <Typography.Text variant="xs/normal" className="mt-2">
            Hover for details
          </Typography.Text>
        </div>
      </TooltipTrigger>

      <TooltipContent side="bottom" className="min-w-xs">
        <div className="space-y-3">
          <div className="grid grid-cols-2">
            {hoverStats.map((item, i) => (
              <div key={item.name} className={`space-y-2 ${i === 0 ? 'border-e border-zinc-600 pe-4' : 'ps-4'}`}>
                {item.items.map(item => (
                  <div key={item.label} className="flex justify-between">
                    <Typography.Text variant="xs/normal" className="text-background">
                      {item.label}:
                    </Typography.Text>
                    <Typography.Text variant="xs/normal" className="text-background capitalize font-mono">
                      {item.value}
                    </Typography.Text>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
