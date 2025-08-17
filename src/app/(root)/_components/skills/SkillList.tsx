import Typography from '@/components/ui/typography';
import { IconType } from 'react-icons';

interface SkillItem {
  name: string;
  icon: IconType;
  backgroundColor: string;
}

const SkillList = ({ data }: { data: SkillItem[] }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map(item => {

        return (
          <div
            key={item.name}
            className={`border text-center flex justify-center items-center gap-2 capitalize rounded-xl w-full h-max py-2.5`}
          >
            <div className={`w-1.5 h-1.5 ${item.backgroundColor}`} />
            <Typography.Text variant="sm/semibold" className="font-mono">
              {item.name}
            </Typography.Text>
          </div>
        );
      })}
    </div>
  );
};

export default SkillList;
