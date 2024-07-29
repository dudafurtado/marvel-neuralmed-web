import paramsUrlMarvel from '@/utils/paramsUrlMarvel';
import {
  MarvelCharactersResponse,
  MarvelCharacter,
} from '@/interfaces/charactersInterfaces';
import { MarvelComic, MarvelComicsResponse } from '@/interfaces/comicsInterfaces';
import { MarvelEventResponse, MarvelEvent } from '@/interfaces/eventsInterfaces';
import { MarvelSeries, MarvelSeriesResponse } from '@/interfaces/seriesInterfaces';
import { UrlsCharacterContent } from '@/interfaces/characterDetailsInterfaces';

const baseUrl = process.env.NEXT_PUBLIC_MARVEL_BASE_URL as string;
const params: string = paramsUrlMarvel();

export async function listCharacters(offset: number) {
  const pagination: string = `&limit=10&offset=${offset}`;
  const url: string = `${baseUrl}/v1/public/characters${params}${pagination}`;
  const res: Response = await fetch(url);

  if (!res.ok) {
    const errorText: string = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data: MarvelCharactersResponse = await res.json();

  return {
    results: data.data.results as MarvelCharacter[],
    total: data.data.total as number,
  };
}

export async function characterDetailContent(
  urls: UrlsCharacterContent,
  typeOfList: string
) {
  type TypeOfList = keyof UrlsCharacterContent;
  
  const type = typeOfList as TypeOfList;
  const url: string = `${urls[type]}${params}`;
  const res: Response = await fetch(url);

  if (!res.ok) {
    const errorText: string = await res.text();
    throw new Error(`Failed to fetch data: ${errorText}`);
  }

  const data: MarvelComicsResponse | MarvelEventResponse | MarvelSeriesResponse =
    await res.json();

  return data.data.results as MarvelComic[] | MarvelEvent[] | MarvelSeries[];
}
