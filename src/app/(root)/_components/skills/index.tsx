'use client';
import { Container } from '@/components/ui/main';
import { Title } from '@/components/ui/title';
import { useSkillStore } from './SkillStore';
import { IconStack } from '@tabler/icons-react';
import { Separator } from '@/components/ui/separator';
import { PRODUCTIVITY_TOOLS, SKILLS_STACKS } from '@/common/constants/skill';
import SkillsControls from './SkillControls';
import SkillList from './SkillList';

const Skills = () => {
  const skillType = useSkillStore(state => state.skillType);
  const data = skillType === 'stacks' ? SKILLS_STACKS : PRODUCTIVITY_TOOLS;

  return (
    <Container className="space-y-10">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
        <Title
          text="Skills"
          desc="Tech stack I rely on every day — plus a few I'm still growing with 🌱"
          icon={IconStack}
          iconSize={32}
          className="col-span-2"
        />
        <SkillsControls />
      </div>

      <Separator />

      <SkillList data={data} />
    </Container>
  );
};

export default Skills;
