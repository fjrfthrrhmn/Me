import { STATS } from '@/common/constants/about';
import { NumberTicker } from '@/components/fragments/NumberTicker';
import Typography from '@/components/ui/typography';

const ExperienceStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {STATS.map((stat, index) => (
        <div key={index} className="bg-secondary/50 border rounded-lg p-6 flex flex-row justify-center items-center gap-2">
          <Typography.Title variant="1/black" className="text-center flex items-center justify-center">
            <NumberTicker value={parseInt(stat.value, 10)} />
          </Typography.Title>
          <div className="mt-2">
            <Typography.Title variant="6/black">{stat.label}</Typography.Title>
            <Typography.Text variant="sm/normal">{stat.description}</Typography.Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceStats;
