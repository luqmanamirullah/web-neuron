import { type About } from '@/interface';
import getData from '@/utils/getData';

async function getAboutPage(): Promise<About> {
  const res = await getData(process.env.API_URL + '/about').then(
    (data) => data.data,
  );

  return res;
}

export default getAboutPage;
