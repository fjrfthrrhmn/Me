import { SkillItemProps } from '@/common/constants/skill';
import { DotPattern } from '@/components/fragments/Background';
import { CardCustom } from '@/components/fragments/CardCustom';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'motion/react';
import Typography from '@/components/ui/typography';

const SkillList = ({ data }: { data: SkillItemProps[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {data.map((item, index) => {
        return (
          <motion.div
            key={item.name}
            title={item.name}
            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: 'easeOut',
            }}
          >
            <CardCustom
              className={cn(
                'relative overflow-hidden z-50 flex flex-row gap-4 items-center p-4',
                'group transition-all duration-300',
                item.grow && 'border-green-200 dark:border-green-800 border-2'
              )}
            >
              {/* Background */}
              <div className="absolute -z-50 w-full h-full">
                <DotPattern
                  width={20}
                  height={20}
                  cx={1}
                  cy={1}
                  cr={1}
                  color={item.textColor}
                  className="[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] opacity-90"
                />
              </div>

              {/* Icon */}
              <div className={`${item.textColor} ${item.bgColor} p-2 rounded-full`}>
                <item.icon size={24} />
              </div>

              {/* Tooltip */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col gap-1 items-start">
                    <Typography.Text variant="sm/bold" className="font-mono text-foreground">
                      {item.name} {item.grow && '🌱'}
                    </Typography.Text>
                    <Typography.Text variant="xs/normal" className="text-foreground/50">
                      {item.desc}
                    </Typography.Text>
                  </div>
                </TooltipTrigger>

                {item.grow && (
                  <TooltipContent side="bottom">
                    <Typography.Text>🌱 Currently learning and improving</Typography.Text>
                  </TooltipContent>
                )}
              </Tooltip>
            </CardCustom>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillList;
