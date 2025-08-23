import { Container } from '@/components/ui/main';
import { Separator } from '@/components/ui/separator';
import { Title } from '@/components/ui/title';
import { User } from 'lucide-react';
import { NumberTicker } from '@/components/fragments/NumberTicker';
import { STATS } from '@/common/constants/about';
import Typography from '@/components/ui/typography';
import Profile from './Profile';
import ExperienceStats from './ExperienceStats';

const About = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Title
          text="About Me"
          desc="A short story of who I am, what I love to build, and the journey I’m taking as a developer."
          icon={User}
        />

        <Separator />

        <Profile />
        <ExperienceStats />
      </div>
    </Container>
  );
};

export default About;
