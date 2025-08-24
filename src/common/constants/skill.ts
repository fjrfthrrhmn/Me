import { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGit,
  SiCanva,
  SiFigma,
  SiPostman,
  SiSpotify,
  SiGithub,
  SiDiscord,
  SiNotion,
  SiZoom,
} from 'react-icons/si';
import { TbBrandAstro, TbTerminal2, TbBrandFramerMotion } from 'react-icons/tb';
import { IconBrandVisualStudio } from '@tabler/icons-react';

export interface SkillItemProps {
  name: string;
  icon: IconType;
  textColor: string;
  bgColor: string;
  desc: string;
  grow?: boolean;
}

export const SKILLS_STACKS: SkillItemProps[] = [
  {
    name: 'HTML',
    icon: SiHtml5,
    textColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    desc: 'Web page structure',
  },
  {
    name: 'CSS',
    icon: SiCss3,
    textColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    desc: 'Web styling',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    textColor: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    desc: 'Web interactivity',
  },
  {
    name: 'React',
    icon: SiReact,
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    desc: 'UI library',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-600/10',
    desc: 'Typed JavaScript',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-400/10',
    desc: 'Utility CSS framework',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    textColor: 'text-black dark:text-white',
    bgColor: 'bg-black/10 dark:bg-white/10',
    desc: 'React framework',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    textColor: 'text-green-600',
    bgColor: 'bg-green-600/10',
    desc: 'JS runtime',
  },
  {
    name: 'PHP',
    icon: SiPhp,
    textColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    desc: 'Server-side language',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-700/10',
    desc: 'SQL database',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    textColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
    desc: 'NoSQL database',
    grow: true,
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    textColor: 'text-red-500',
    bgColor: 'bg-red-500/10',
    desc: 'PHP framework',
  },
  {
    name: 'Astro',
    icon: TbBrandAstro,
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-600/10',
    desc: 'Static site builder',
  },
  {
    name: 'Framer Motion',
    icon: TbBrandFramerMotion,
    textColor: 'text-black dark:text-white',
    bgColor: 'bg-black/10 dark:bg-white/10',
    desc: 'Animation library',
  },
];

export interface ToolItemProps {
  name: string;
  icon: IconType;
  textColor: string;
  bgColor: string;
  desc: string;
  category: string;
}

export const PRODUCTIVITY_TOOLS: ToolItemProps[] = [
  {
    name: 'VS Code',
    icon: IconBrandVisualStudio,
    textColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    desc: 'Code editor',
    category: 'Development',
  },
  {
    name: 'Figma',
    icon: SiFigma,
    textColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    desc: 'Design tool',
    category: 'Design',
  },
  {
    name: 'Postman',
    icon: SiPostman,
    textColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    desc: 'API testing',
    category: 'Development',
  },
  {
    name: 'Terminal',
    icon: TbTerminal2,
    textColor: 'text-black dark:text-white',
    bgColor: 'bg-black/10 dark:bg-white/10',
    desc: 'Command line',
    category: 'Development',
  },
  {
    name: 'Spotify',
    icon: SiSpotify,
    textColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
    desc: 'Music streaming',
    category: 'Entertainment',
  },
  {
    name: 'Canva',
    icon: SiCanva,
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    desc: 'Graphic design',
    category: 'Design',
  },
  {
    name: 'Git',
    icon: SiGit,
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-600/10',
    desc: 'Version control',
    category: 'Development',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    textColor: 'text-black dark:text-white',
    bgColor: 'bg-black/10 dark:bg-white/10',
    desc: 'Code hosting',
    category: 'Development',
  },
  {
    name: 'Discord',
    icon: SiDiscord,
    textColor: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    desc: 'Team communication',
    category: 'Communication',
  },
  {
    name: 'Notion',
    icon: SiNotion,
    textColor: 'text-black dark:text-white',
    bgColor: 'bg-black/10 dark:bg-white/10',
    desc: 'Note taking',
    category: 'Organization',
  },
];
