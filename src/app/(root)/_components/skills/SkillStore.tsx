import { create } from 'zustand';

type SKILL_TYPE = 'stacks' | 'tools';

interface SkillState {
  skillType: SKILL_TYPE;
  setSkillType: (skills: SKILL_TYPE) => void;
}

export const useSkillStore = create<SkillState>((set, get) => ({
  skillType: 'stacks',
  setSkillType: skills => set({ skillType: skills }),
}));
