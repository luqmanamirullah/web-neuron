import { type Methodology } from '@/interface';
import getData from '@/utils/getData';

async function getMethodologies(): Promise<Methodology[]> {
  const res = await getData(process.env.API_URL + '/methodology').then(
    (data) => data.data,
  );
  return res;
}

export default getMethodologies;
