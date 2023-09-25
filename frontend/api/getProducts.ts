import { type ProductsHome } from '@/interface';
import getData from '@/utils/getData';

async function getProducts(): Promise<ProductsHome[]> {
  const res = await getData(process.env.API_URL + '/products').then(
    (data) => data.data,
  );
  return res;
}

export default getProducts;
