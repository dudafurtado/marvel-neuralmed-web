import paramsUrlMarvel from '@/utils/paramsUrlMarvel';
import MarvelAPIResponse, { Character } from '@/interfaces/characterDetailsInterfaces';
import MarvelEventResponse, {
  MarvelEvent,
} from '@/interfaces/characterEventsListInterfaces';
import { MarvelCharacter, MarvelResponse } from '@/interfaces/characterListInterfaces';

const baseUrl = process.env.NEXT_PUBLIC_MARVEL_BASE_URL as string;
const params = paramsUrlMarvel();

export async function listCharacters(offset?: number) {
  offset = offset ?? 0;

  const pagination = `&limit=10&offset=${offset}`;
  const url = `${baseUrl}/v1/public/characters${params}${pagination}`;
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data: MarvelResponse = await res.json();

  // console.log(data.data.total);

  return data.data.results as MarvelCharacter[];
}

export async function characterDetails(id: number) {
  const characterId = `/${id}`;
  const url = `${baseUrl}/v1/public/characters${characterId}${params}`;
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data: MarvelAPIResponse = await res.json();

  return data.data.results[0] as Character;
}

export async function listCharacterEvents(id: number) {
  const characterId = `/${id}`;
  const url = `${baseUrl}/v1/public/characters${characterId}/events${params}`;
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data: MarvelEventResponse = await res.json();

  return data.data.results as MarvelEvent[];
}
