import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/main';
import { Separator } from '@/components/ui/separator';
import { Title } from '@/components/ui/title';
import { ArrowRight, Monitor, User } from 'lucide-react';
import Typography from '@/components/ui/typography';
import Image from 'next/image';

const About = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Title text="About Me" desc="Lorem ispum dolor anjay mabar" icon={User} />
        <Separator />

        {/* Profile */}
        <div className="grid grid-cols-6 gap-10">
          <div className="relative col-span-3 flex items-center justify-center">
            <Image
              src={'https://i.pinimg.com/1200x/bc/87/75/bc8775e0d865b16ed58d26a5bf08c23e.jpg'}
              alt="profile"
              width={400}
              height={400}
              className="w-full h-72 bg-cover object-cover bg-center rounded-2xl"
              unoptimized
            />
          </div>

          <div className="relative col-span-3">
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex gap-1 items-center">
                {['Designer', 'Fullstack Developer'].map(item => {
                  return (
                    <Typography.Text variant='xs/normal' key={item} className="bg-indigo-500/25 text-indigo-500 rounded px-4 py-1.5 flex items-center gap-2">
                      <Monitor size={16} />
                      {item}
                    </Typography.Text>
                  );
                })}
              </div>
              <Typography.Title variant="2/black">Fajar Fathurrahman</Typography.Title>
              <Typography.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae quia ut numquam consectetur sit omnis, nulla
                aspernatur tenetur laborum deserunt illo, a cupiditate, error ad possimus debitis iste doloribus!
              </Typography.Text>
            </div>

            <Button>
              See Portfolio! <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Card Experiences: [Year, Projects and Clients] */}
        <div className="grid grid-cols-3 gap-2">
          <div className="border rounded-lg flex justify-center items-center py-16">Year</div>
          <div className="border rounded-lg flex justify-center items-center py-16">Projects</div>
          <div className="border rounded-lg flex justify-center items-center py-16">Clients</div>
        </div>
      </div>
    </Container>
  );
};

export default About;
