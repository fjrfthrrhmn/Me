import { create } from 'zustand';

type PROJECT_TYPE = 'website' | 'design';

interface ProjectState {
  projectType: PROJECT_TYPE;
  setProjectType: (project: PROJECT_TYPE) => void;
}

export const useProjectStore = create<ProjectState>()((set, get) => ({
  projectType: 'website',
  setProjectType: project => set({ projectType: project }),
}));