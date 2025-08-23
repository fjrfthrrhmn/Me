import { IconBriefcase, IconCertificate, IconDashboard, IconFolderCode, IconStack, IconUser } from '@tabler/icons-react';
import { FloatingDock } from '../ui/floating-dock';
import { LucideLanguages, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { handleChangeTheme } from '@/common/hooks/useTheme';

const NAV_LINKS = [
  {
    title: 'About',
    icon: IconUser,
    href: '#about',
  },
  {
    title: 'Dashboard',
    icon: IconDashboard,
    href: '#dashboard',
  },
  {
    title: 'Experiences',
    icon: IconBriefcase,
    href: '#experiences',
  },
  {
    title: 'Certificates',
    icon: IconCertificate,
    href: '#certificates',
  },
  {
    title: 'Projects',
    icon: IconFolderCode,
    href: '#projects',
  },
  {
    title: 'Skills',
    icon: IconStack,
    href: '#skills',
  },
];

const Navigation = () => {
  const { theme, setTheme } = useTheme();

  const navClick = [
    {
      title: 'Toggle Theme',
      icon: theme === 'light' ? Moon : Sun,
      onClick: (e: React.MouseEvent<HTMLElement>) => handleChangeTheme(theme, setTheme, e.currentTarget as HTMLElement),
    },
    {
      title: 'Toggle Language',
      icon: LucideLanguages,
      onClick: () => console.log('toggle language'),
    },
  ];

  return (
    <>
      <nav className="fixed bottom-6 z-50 w-full h-max mx-auto">
        <div className="w-full mx-auto flex gap-2 justify-end md:justify-center px-2 sm:px-4 md:w-max">
          <FloatingDock items={NAV_LINKS} />
          <div className="hidden md:block">
            <FloatingDock items={navClick} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
