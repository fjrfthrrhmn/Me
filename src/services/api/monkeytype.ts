import axios from 'axios';

export async function fetcherMonkeyType<T>(endpoint: string, token: string) {
  const URL = `https://api.monkeytype.com/users/${endpoint}`;
  
  const { data } = await axios.get(URL, {
    headers: {
      Authorization: `ApeKey ${token}`,
    },
  });

  return data;
}
