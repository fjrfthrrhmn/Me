'use client';
import { Container } from '@/components/ui/main';
import { Title } from '@/components/ui/title';
import { Folder } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useGetWebsiteProjects } from '@/services/hooks/useProjects';
import { ProjectDesignList, ProjectWebsiteList } from './ProjectList';
import { useProjectStore } from './ProjectStore';
import ProjectControls from './ProjectControls';

const Projects = () => {
  // use use server
  // const { websites, isLoading } = useGetDesignProjects();
  const { websites, isLoading } = useGetWebsiteProjects();
  const type = useProjectStore(state => state.projectType);

  return (
    <>
      <Container className="space-y-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <Title
            text="Daftar Proyek List"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aspernatur?"
            icon={Folder}
            className="col-span-2"
          />

          <ProjectControls />
        </div>

        <Separator />

        {type === 'design' ? (
          <ProjectDesignList data={websites || []} loading={true} />
        ) : (
          <ProjectWebsiteList data={websites || []} loading={true} />
        )}
      </Container>
    </>
  );
};

export default Projects;
