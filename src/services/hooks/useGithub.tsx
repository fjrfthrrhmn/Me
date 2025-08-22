'use client';
import { useQuery } from '@tanstack/react-query';
import { ResGithubProfile } from '../types/github';
import { API_CONFIG } from '../config/api';
import axios, { AxiosError } from 'axios';

export function useGithubProfile(username: string) {
  const URL = `${API_CONFIG.github.base}${username}`;

  const { data, ...rest } = useQuery<ResGithubProfile, AxiosError>({
    queryKey: ['Github Profile'],
    queryFn: async () => (await axios.get<ResGithubProfile>(URL)).data,
    enabled: !!username,
  });

  return { data, ...rest };
}
