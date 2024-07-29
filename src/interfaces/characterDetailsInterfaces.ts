export default interface MarvelAPIResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelData;
}

interface MarvelData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: URL[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: Comic[];
  returned: number;
}

interface Comic {
  resourceURI: string;
  name: string;
}

interface Series {
  available: number;
  collectionURI: string;
  items: Serie[];
  returned: number;
}

interface Serie {
  resourceURI: string;
  name: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: Story[];
  returned: number;
}

interface Story {
  resourceURI: string;
  name: string;
  type: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: Event[];
  returned: number;
}

interface Event {
  resourceURI: string;
  name: string;
}

interface URL {
  type: string;
  url: string;
}

export interface CharacterContentModified {
  id: number;
  name: string;
  description: string;
  src: string;
  urls: UrlsCharacterContent;
}

export interface UrlsCharacterContent {
  comics: string;
  events: string;
  series: string;
}

export interface CharacterListsModified {
  id: number;
  title: string;
  description: string;
  src: string;
}
