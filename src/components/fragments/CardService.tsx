import { RocketIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Typography from '../ui/typography';
import SpotlightCard from './SpotlightCard';
import { PointerHighlight } from '../ui/pointer-highlight';

export const CardService = () => {
  return (
    <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
      <div className="space-y-8 relative z-10">
        <div className="flex gap-1">
          <div className="rounded-full bg-red-400 w-4 h-4" />
          <div className="rounded-full bg-yellow-400 w-4 h-4" />
          <div className="rounded-full bg-green-400 w-4 h-4" />
        </div>

        <div>
          <Typography.Title variant="2/black" className="flex gap-2">
            Let’s Create{' '}
            <PointerHighlight rectangleClassName='border-zinc-100'>
              <span className=''>Something</span>
            </PointerHighlight>
          </Typography.Title>
          <Typography.Text className="text-zinc-400 max-w-lg my-2">
            I craft beautiful, functional interfaces that blend aesthetic appeal with seamless user experience. Lets create something
            amazing together.
          </Typography.Text>
        </div>

        <div className="flex">
          {/* Add icon contacts */}
          <Button className='bg-zinc-100 text-zinc-900 '>
            <RocketIcon />
            Start a Project
          </Button>
        </div>
      </div>

      <div className="absolute -bottom-14 -right-36 rotate-6 z-0">
        <span className="text-[20rem] leading-none select-none grayscale-0">✨</span>
      </div>
    </SpotlightCard>
  );
};
