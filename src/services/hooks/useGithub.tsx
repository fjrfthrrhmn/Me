'use client';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

export function useGithubProfile(username: string) {
  const URL = `https://api.github.com/users/${username}`;

  const { data, ...rest } = useQuery<ResGithubProfile, AxiosError>({
    queryKey: ['github', username],
    queryFn: async () => (await axios.get<ResGithubProfile>(URL)).data,
    enabled: !!username,
    networkMode: 'online',
  });

  return { data, ...rest };
}
