import { type ServicePage } from '@/interface';
import getData from '@/utils/getData';

async function getServicePage(): Promise<ServicePage> {
  const res = await getData(process.env.API_URL + '/service-pages').then(
    (data) => data.data[0],
  );
  return res;
}

export default getServicePage;
