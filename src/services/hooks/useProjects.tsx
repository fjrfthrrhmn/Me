import { useQuery } from '@tanstack/react-query';
import { ResponseProjects } from '../types/project';

export function useGetWebsiteProjects() {
  const { data, ...rest } = useQuery<ResponseProjects>({
    queryKey: ['ProjectsWebsite'],
    queryFn: async () => (await fetch('/api/projects')).json(),
  });

  return {
    websites: data?.data,
    ...rest,
  };
}
