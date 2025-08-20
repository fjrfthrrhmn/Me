import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/main';
import { Separator } from '@/components/ui/separator';
import { Title } from '@/components/ui/title';
import { ArrowDown, ArrowRight, User } from 'lucide-react';
import { NumberTicker } from '@/components/fragments/NumberTicker';
import { ROLES, STATS } from '@/common/constants/about';
import Image from 'next/image';
import Typography from '@/components/ui/typography';

const About = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Title text="About Me" desc="Lorem ispum dolor anjay mabar" icon={User} />
        <Separator />

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
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
                {ROLES.map((item, index) => {
                  return (
                    <Typography.Text
                      key={index}
                      variant="xs/normal"
                      className={`${item.color} rounded px-4 py-1.5 flex items-center gap-2`}
                    >
                      <item.icon size={16} />
                      {item.label}
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

            <div className="flex sm:items-center flex-col sm:flex-row gap-2">
              <Button>
                See Portfolio! <ArrowRight />
              </Button>
              <Button variant={'outline'}>
                Whats i created! <ArrowDown />
              </Button>
            </div>
          </div>
        </div>

        {/* Card Experiences: [Year, Projects and Clients] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STATS.map((stat, index) => (
            <div key={index} className="bg-secondary/50 border rounded-lg p-6 flex flex-row justify-center items-center gap-4">
              <Typography.Title variant="1/black" className="text-center flex items-center justify-center">
                <NumberTicker value={parseInt(stat.value, 10)} />
              </Typography.Title>
              <div className="mt-2">
                <Typography.Text variant="lg/bold">{stat.label}</Typography.Text>
                <Typography.Text variant="sm/normal">{stat.description}</Typography.Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
