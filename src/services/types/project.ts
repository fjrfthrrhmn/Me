export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export interface ResponseProjects {
  message: string;
  data: ProjectItem[];
}
