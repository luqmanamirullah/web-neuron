import { type HomePage } from '@/interface';
import getData from '@/utils/getData';

async function getHomePage(): Promise<HomePage> {
  const res = await getData(process.env.API_URL + '/home').then(
    (data) => data.data[0],
  );
  return res;
}

export default getHomePage;
