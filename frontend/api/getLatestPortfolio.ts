import { type Portfolio } from '@/interface';
import getData from '@/utils/getData';

async function getLatestPortfolio(): Promise<Portfolio[]> {
  const res = await getData(process.env.API_URL + '/portofolios/latest').then(
    (data) => data.data,
  );
  return res;
}

export default getLatestPortfolio;
