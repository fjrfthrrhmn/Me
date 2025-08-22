import { useQuery } from '@tanstack/react-query';
import { fetcherMonkeyType } from '../api/monkeytype';
import { ResMonkeyTypeProfile } from '../types/monkeytype';
import { AxiosError } from 'axios';

/**
 * @name Get Profile User
 * @description Gets a user's profile.
 * @param username
 * @returns
 */
export function useMonkeyTypeProfile(username: string) {
  const { data, ...rest } = useQuery<ResMonkeyTypeProfile, AxiosError>({
    queryKey: ['MonkeyType Profile'],
    queryFn: async () => fetcherMonkeyType<ResMonkeyTypeProfile>(`${username}/profile`),
    enabled: !!username,
  });

  return { res: data, data: data?.data, ...rest };
}

/**
 * @name Get Streak
 * @description Get user's streak data.
 * @returns
 */
export function useMonkeyTypeStreak() {
  const { data, ...rest } = useQuery({
    queryKey: ['MonkeyType Streak'],
    queryFn: async () => fetcherMonkeyType('streak'),
  });

  return { data, ...rest };
}
