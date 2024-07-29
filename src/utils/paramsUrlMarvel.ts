import MD5 from 'crypto-js/md5';

export default function paramsUrlMarvel() {
  const ts = new Date().getTime();
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY as string;
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY as string;

  if (!publicKey || !privateKey) {
    throw new Error('Missing API keys');
  }

  const hash: string = MD5(ts + privateKey + publicKey).toString();
  const params: string = `?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  return params;
}
