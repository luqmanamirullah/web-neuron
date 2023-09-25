import { type SuccessPortfolio } from '@/interface';
import getData from '@/utils/getData';

async function getSuccessPortfolio(): Promise<SuccessPortfolio[]> {
  const res = await getData(process.env.API_URL + '/success-portofolio').then(
    (data) => data.data,
  );
  return res;
}

export default getSuccessPortfolio;
