import { UrlsCharacterContent } from './characterDetailsInterfaces';

export interface MarvelCharactersResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelCharactersData;
}

interface MarvelCharactersData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: MarvelCharacter[];
}

export interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: ComicData;
  series: SeriesData;
  stories: StoryData;
  events: EventData;
  urls: Url[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface ComicData {
  available: number;
  collectionURI: string;
  items: Comic[];
  returned: number;
}

interface Comic {
  resourceURI: string;
  name: string;
}

interface SeriesData {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface StoryData {
  available: number;
  collectionURI: string;
  items: Story[];
  returned: number;
}

interface Story {
  resourceURI: string;
  name: string;
  type?: string;
}

interface EventData {
  available: number;
  collectionURI: string;
  items: Event[];
  returned: number;
}

interface Event {
  resourceURI: string;
  name: string;
}

interface Url {
  type: string;
  url: string;
}

export interface SeriesAndEventsModified {
  id: number;
  name: string;
}

export interface CharactersDataModified {
  id: number;
  name: string;
  description: string;
  src: string;
  series: SeriesAndEventsModified[];
  events: SeriesAndEventsModified[];
  urls: UrlsCharacterContent;
}

export interface DataRestructured {
  id: number;
  title: string;
  description: string;
  src?: string;
}

export interface ResultOfListCharacter {
  results: MarvelCharacter[];
  total: number;
}
