import { type Article } from '@/interface';
import getData from '@/utils/getData';

async function getLatestArticle(): Promise<Article[]> {
  const res = await getData(process.env.API_URL + '/blog-latest').then(
    (data) => data.data,
  );
  return res;
}

export default getLatestArticle;
