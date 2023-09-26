import { type Services } from '@/interface';
import getData from '@/utils/getData';

async function getServices(): Promise<Services[]> {
  const res = await getData(process.env.API_URL + '/services').then(
    (data) => data.data,
  );
  return res;
}

export default getServices;
