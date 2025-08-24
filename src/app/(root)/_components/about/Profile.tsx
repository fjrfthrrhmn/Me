import { ButtonCustom } from '@/components/fragments/ButtonCustom';
import { MdVerified } from 'react-icons/md';
import { Briefcase } from 'lucide-react';
import Typography from '@/components/ui/typography';
import Image from 'next/image';

const BUTTONS = [
  {
    name: 'portfolio',
    url: '#',
    type: 'external',
    label: 'View Portfolio',
    icon: Briefcase,
    reverse: true
  },
  {
    name: 'projects',
    url: '#',
    type: 'internal',
    label: 'See My Builds',
    variant: 'secondary',
  },
];

const Profile = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
      <div className="relative col-span-3 flex items-center justify-center">
        <Image
          src="https://i.pinimg.com/736x/11/a0/9c/11a09c9e8c4a3e99f4b29d299a3f71ca.jpg"
          alt="avatar"
          width={70}
          height={70}
          className="h-80 w-full bg-cover object-cover rounded-2xl border-8"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="relative col-span-3">
        <div className="flex flex-col gap-2 mb-6">
          <Typography.Title variant="2/black" className="flex items-center gap-2">
            <span>Fajar Fathurrahman</span> <MdVerified size={24} className="text-blue-500 hidden sm:block" />
          </Typography.Title>
          <Typography.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae quia ut numquam consectetur sit omnis, nulla aspernatur
            tenetur laborum deserunt illo, a cupiditate, error ad possimus debitis iste doloribus!
          </Typography.Text>
        </div>

        <div className="flex sm:items-center flex-col sm:flex-row gap-2">
          {BUTTONS.map(item => {
            return (
              <ButtonCustom
                key={item.name}
                type={item.type as 'external' | 'internal'}
                url={item.url}
                icon={item.icon}
                variant={item.variant as any}
                reverse={item.reverse}
              >
                {item.label}
              </ButtonCustom>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
