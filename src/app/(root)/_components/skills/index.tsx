'use client'
import { Container } from '@/components/ui/main';
import { Title } from '@/components/ui/title';
import { IconStack } from '@tabler/icons-react';
import SkillsControls from './SkillControls';
import { Separator } from '@/components/ui/separator';
import SkillList from './SkillList';
import {
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconGitBranch,
  IconHtml,
} from '@tabler/icons-react';
import { useSkillStore } from './SkillStore';

const SKILLS_STACKS = [
  {
    name: 'html',
    icon: IconHtml,
    backgroundColor: 'bg-orange-500',
  },
  {
    name: 'css',
    icon: IconBrandCss3,
    backgroundColor: 'bg-blue-500',
  },
  {
    name: 'javascript',
    icon: IconBrandJavascript,
    backgroundColor: 'bg-yellow-400',
  },
  {
    name: 'typescript',
    icon: IconBrandTypescript,
    backgroundColor: 'bg-blue-600',
  },
  {
    name: 'react',
    icon: IconBrandReact,
    backgroundColor: 'bg-cyan-400',
  },
  {
    name: 'nodejs',
    icon: IconBrandNodejs,
    backgroundColor: 'bg-green-500',
  },
  {
    name: 'git',
    icon: IconGitBranch,
    backgroundColor: 'bg-red-500',
  },
];

const Skills = () => {
  const skillType = useSkillStore((state) => state.skillType)
  const data = skillType === 'stacks' ? SKILLS_STACKS : [] // SKILLS TOOLS

  return (
    <Container className="space-y-10">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        <Title text="Skills" desc="lorem ipsum dolor anjay mabr we meet" icon={IconStack} iconSize={32} className="col-span-2" />
        <SkillsControls />
      </div>

      <Separator />

      <SkillList data={data} />
    </Container>
  );
};

export default Skills;
