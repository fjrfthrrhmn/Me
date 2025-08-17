import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { Container } from '@/components/ui/main';
import { Title } from '@/components/ui/title';
import { InputIcon } from '@radix-ui/react-icons';
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, LayoutGrid } from 'lucide-react';

const features = [
  {
    Icon: FileTextIcon,
    name: 'Save your files',
    description: 'We automatically save your files as you type.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    Icon: InputIcon,
    name: 'Full text search',
    description: 'Search through all your files in one place.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
  {
    Icon: GlobeIcon,
    name: 'Multilingual',
    description: 'Supports 100+ languages and counting.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
  },
  {
    Icon: CalendarIcon,
    name: 'Calendar',
    description: 'Use the calendar to filter your files by date.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: BellIcon,
    name: 'Notifications',
    description: 'Get notified when someone shares a file or mentions you in a comment.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
];

const Kaban = () => {
  return (
    <Container className="space-y-10">
      <Title text="Kaban" desc="lotem ipsum dolor" icon={LayoutGrid} />

      <BentoGrid className="lg:grid-rows-3">
        {features.map(feature => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </Container>
  );
};

export default Kaban;
