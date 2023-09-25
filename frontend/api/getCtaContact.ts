import { type CTAContact } from '@/interface';
import getData from '@/utils/getData';

async function getCtaContact(): Promise<CTAContact> {
  const res = await getData(process.env.API_URL + '/cta-contacts').then(
    (data) => data.data[0],
  );
  
  return res;
}

export default getCtaContact;
