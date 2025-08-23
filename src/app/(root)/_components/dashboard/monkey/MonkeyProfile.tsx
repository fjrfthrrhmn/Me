import { CardCustom } from '@/components/fragments/CardCustom';
import { Avatar } from '@/components/ui/avatar';
import { ResMonkeyTypeProfile } from '@/services/types/monkeytype';
import { calculateXPProgress, formatDate, getBestStats } from './utils';
import { buildStatsConfig } from './config';
import Typography from '@/components/ui/typography';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { shimmer } from '@/lib/utils';

type MonkeyProfileProps = Pick<ResMonkeyTypeProfile, 'data'>;

const MonkeyProfile = ({ data }: MonkeyProfileProps) => {
  const { name, addedAt, personalBests, xp, maxStreak } = data;
  const { bestAccuracy, bestWPM } = getBestStats(personalBests);
  const { percentage, nextLevelXP, level } = calculateXPProgress(xp);
  const stats = buildStatsConfig(data, bestWPM, bestAccuracy);

  const toBase64 = (str: string) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str));

  return (
    <CardCustom className="h-max">
      <div className="grid grid-cols-1 lg:grid-cols-6 items-center gap-y-4">
        {/* === Col 1: Profile === */}
        <div className="lg:border-r lg:col-span-2">
          <div className="flex gap-2 items-center">
            <Avatar rounded="rounded-2xl">
              <Image
                src="https://i.pinimg.com/736x/11/a0/9c/11a09c9e8c4a3e99f4b29d299a3f71ca.jpg"
                alt="avatar"
                width={70}
                height={70}
                className="h-full w-full bg-cover bg-center"
                loading="lazy"
                placeholder='blur'
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                unoptimized
              />
            </Avatar>
            <div>
              <Typography.Title variant="5/black" className="font-mono capitalize">
                {name}
              </Typography.Title>
              <Typography.Text variant="xs/normal">Joined {formatDate(addedAt)}</Typography.Text>

              <div className="bg-orange-500/10 px-2 py-0.5 rounded-2xl mt-2">
                <Typography.Text variant="xs/bold" className="text-orange-500 flex items-center gap-2">
                  <span>🔥</span>
                  Streak: {maxStreak} days
                </Typography.Text>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2 mt-4 w-[90%]">
            <Typography.Text variant="sm/semibold" className="min-w-max">
              Lvl {level}
            </Typography.Text>
            <div className="bg-muted w-full h-1.5 rounded-full">
              <div className="h-2 bg-highlight rounded-full transition-all" style={{ width: `${percentage}%` }} />
            </div>
            <Typography.Text variant="xs/normal">
              {xp}/{nextLevelXP}
            </Typography.Text>
          </div>
        </div>

        <Separator className="my-4 block lg:hidden" />

        {/* === Col 2: Stats (Best WPM & Accuracy) === */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 *:text-center lg:col-span-4 h-full">
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
