import { type CTAContact } from '@/interface';
import getData from '@/utils/getData';

async function getPortfolioCategory(): Promise<CTAContact> {
  const res = await getData(process.env.API_URL + '/portofolio/category').then(
    (data) => data.data,
  );
  console.log(res);
  return res;
}

export default getPortfolioCategory;
