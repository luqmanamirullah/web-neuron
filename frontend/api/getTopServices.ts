import { type TopServices } from '@/interface';
import getData from '@/utils/getData';

async function getTopServices(): Promise<TopServices[]> {
  const res = await getData(process.env.API_URL + '/home').then(
    (data) => data.data,
  );
  return res;
}

export default getTopServices;
