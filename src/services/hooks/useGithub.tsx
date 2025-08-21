'use client';
import { useQuery } from '@tanstack/react-query';
import { ResGithubProfile } from '../types/github';
import axios, { AxiosError } from 'axios';

export function useGithubProfile(username: string) {
  const URL = `https://api.github.com/users/${username}`;

  const { data, ...rest } = useQuery<ResGithubProfile, AxiosError>({
    queryKey: ['Github Profile'],
    queryFn: async () => (await axios.get<ResGithubProfile>(URL)).data,
    enabled: !!username,
    networkMode: 'online',
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  return { data, ...rest };
}
