import { type Technologies } from '@/interface';
import getData from '@/utils/getData';

async function getTechnologies(): Promise<Technologies[]> {
  const res = await getData(process.env.API_URL + '/technologies').then(
    (data) => data,
  );
  return res;
}

export default getTechnologies;
