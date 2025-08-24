import { Sparkles } from 'lucide-react';
import { IconType } from 'react-icons';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';

interface StacksBuiltProps {
  name: string;
  src: string;
  url: string;
  icon: IconType;
}

export const STACKS_BUILT: StacksBuiltProps[] = [
  {
    name: 'Next.js',
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/nextjs-icon.svg',
    url: 'https://nextjs.org/',
    icon: SiNextdotjs,
  },
  {
    name: 'TypeScript',
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/typescript-icon.svg',
    url: 'https://www.typescriptlang.org/',
    icon: SiTypescript,
  },
  {
    name: 'Tailwind CSS',
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/tailwind-icon.svg',
    url: 'https://tailwindcss.com/',
    icon: SiTailwindcss,
  },

  {
    name: 'Vercel',
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/vercel-icon.svg',
    url: 'https://vercel.com/',
    icon: SiVercel,
  },
];

export const BUTTONS = [
  {
    url: '#contact',
    type: 'internal',
    text: 'Lets Work Together',
    icon: Sparkles,
    reverse: true,
    variant: 'default',
  },
  {
    url: '#projects',
    type: 'internal',
    text: 'See My Work',
    variant: 'secondary',
  },
];
