import MD5 from 'crypto-js/md5';

export default async function fetchMarvelAPI(
  path: string,
  limit: number = 10,
  offset: number = 0
) {
  const ts = new Date().getTime();
  const baseUrl = process.env.NEXT_PUBLIC_MARVEL_BASE_URL as string;
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY as string;
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY as string;

  if (!publicKey || !privateKey) {
    throw new Error('Missing API keys');
  }

  const hash = MD5(ts + privateKey + publicKey).toString();
  const params = `?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const pagination = `&limit=${limit}&offset=${offset}`;
  const url = `${baseUrl}${path}${params}${pagination}`;
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data = await res.json();

  // console.log(data.data.total);

  return data.data.results as any;
}
