import { CardCustom } from '@/components/fragments/CardCustom';
import { Avatar } from '@/components/ui/avatar';
import { ResMonkeyTypeProfile } from '@/services/types/monkeytype';
import { formatDate, getBestStats } from './utils';
import { buildStatsConfig } from './config';
import Typography from '@/components/ui/typography';
import Image from 'next/image';

type MonkeyProfileProps = Pick<ResMonkeyTypeProfile, 'data'>;

const MonkeyProfile = ({ data }: MonkeyProfileProps) => {
  const { name, addedAt, personalBests } = data;
  const { bestAccuracy, bestWPM } = getBestStats(personalBests)
  const stats = buildStatsConfig(data, bestWPM, bestAccuracy);

  return (
    <CardCustom className="h-max">
      <div className="grid grid-cols-6 items-center gap-4">
        {/* === Col 1: Profile === */}
        <div className="flex flex-col border-e-2 col-span-2">
          <div className="flex gap-4 items-center">
            <Avatar rounded="rounded-2xl">
              <Image src="https://avatars.githubusercontent.com/u/151801563?v=4" alt="avatar" width={100} height={100} unoptimized />
            </Avatar>
            <div>
              <Typography.Title variant="5/black" className="font-mono capitalize">
                {name}
              </Typography.Title>
              <Typography.Text variant="xs/normal">Joined {formatDate(addedAt)}</Typography.Text>
              <Typography.Text variant="xs/normal">Current streak: 2 days</Typography.Text>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2 mt-4 w-3/4">
            <Typography.Text variant="sm/bold">10</Typography.Text>
            <div className="bg-muted w-full h-1.5 rounded-full">
              <div className="w-1/3 h-1.5 rounded-full bg-teal-300" />
            </div>
            <Typography.Text variant="xs/normal">545/4.3K</Typography.Text>
          </div>
        </div>

        {/* === Col 2: Stats (Best WPM & Accuracy) === */}
        <div className="flex justify-around items-center *:text-center col-span-4 h-full">
          {stats.map(item => (
            <div key={item.label} className="flex flex-col justify-center items-center gap-2 *:text-center">
              <item.icon size={30} />
              <Typography.Title variant="5/bold" className="font-mono">
                {item.value}
              </Typography.Title>
              <Typography.Text variant="xs/normal">{item.label}</Typography.Text>
            </div>
          ))}
        </div>
      </div>
    </CardCustom>
  );
};

export default MonkeyProfile;
