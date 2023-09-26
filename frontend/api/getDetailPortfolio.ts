import { type Portfolio } from '@/interface';
import getData from '@/utils/getData';

interface Props {
  portfolioId: number;
}

async function getDetailPortfolio({ portfolioId }: Props): Promise<Portfolio> {
  console.log(process.env.API_URL + '/portofolio/' + portfolioId);
  const res = await getData(
    process.env.API_URL + '/portofolio/' + portfolioId,
  ).then((data) => data.data);
  return res;
}

export default getDetailPortfolio;
