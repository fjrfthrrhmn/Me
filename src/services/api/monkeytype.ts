import axios from 'axios';
import { API_CONFIG } from '../config/api';

export async function fetcherMonkeyType<T>(endpoint: string) {
  const URL = `${API_CONFIG.monkeytype.base}${endpoint}`;
  
  const { data } = await axios.get(URL, {
    headers: {
      Authorization: `ApeKey ${API_CONFIG.monkeytype.key}`,
    },
  });

  return data;
}
