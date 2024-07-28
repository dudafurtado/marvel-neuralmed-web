import paramsUrlMarvel from '@/utils/paramsUrlMarvel';
import { MarvelCharacter, MarvelResponse } from '@/interfaces/characterListInterfaces';
import MarvelAPIResponse, { Character } from '@/interfaces/characterDetailsInterfaces';
import {
  MarvelStoriesResponse,
  MarvelStory,
} from '@/interfaces/characterStoriesListInterfaces';
import MarvelEventResponse, {
  MarvelEvent,
} from '@/interfaces/characterEventsListInterfaces';
import {
  MarvelSeries,
  MarvelSeriesResponse,
} from '@/interfaces/characterSeriesListInterfaces';

const baseUrl = process.env.NEXT_PUBLIC_MARVEL_BASE_URL as string;
const params = paramsUrlMarvel();

export async function listCharacters(offset: number) {
  const pagination = `&limit=10&offset=${offset}`;
  const url = `${baseUrl}/v1/public/characters${params}${pagination}`;
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data: MarvelResponse = await res.json();

  return {
    results: data.data.results as MarvelCharacter[],
    total: data.data.total as number,
  };
}

export async function characterDetails(id: number) {
  const characterId = `/${id | 1009146}`;
  const url = `${baseUrl}/v1/public/characters${characterId}${params}`;
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data: MarvelAPIResponse = await res.json();

  return data.data.results[0] as Character;
}

export async function characterLists(id: number, typeOfList: string) {
  const characterId = `/${id | 1009146}`;
  const url = `${baseUrl}/v1/public/characters${characterId}/${typeOfList}${params}`;
  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data: MarvelStoriesResponse | MarvelEventResponse | MarvelSeriesResponse =
    await res.json();

  return data.data.results as MarvelStory[] | MarvelEvent[] | MarvelSeries[];
}
