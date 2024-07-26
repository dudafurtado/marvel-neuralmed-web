import paramsUrlMarvel from '@/utils/paramsUrlMarvel';

const baseUrl = process.env.NEXT_PUBLIC_MARVEL_BASE_URL as string;
const params = paramsUrlMarvel();

export async function listCharacters(offset?: number) {
  offset = offset ?? 0;

  const pagination = `&limit=10&offset=${offset}`;
  const url = `${baseUrl}/v1/public/characters${params}${pagination}`;
  console.log(url);

  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data = await res.json();

  // console.log(data.data.total);

  return data.data.results as any;
}

export async function characterDetails(id: number) {
  const characterId = `/${id}`;
  const url = `${baseUrl}/v1/public/characters${characterId}${params}`;
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data = await res.json();

  return data.data.results[0] as any;
}

export async function listCharacterEvents(id: number) {
  const characterId = `/${id}`;
  const url = `${baseUrl}/v1/public/characters${characterId}/events${params}`;
  console.log(url);
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data = await res.json();

  return data.data.results as any;
}
