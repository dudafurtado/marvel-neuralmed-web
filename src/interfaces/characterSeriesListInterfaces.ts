export interface MarvelSeriesResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelSeriesData;
}

interface MarvelSeriesData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: MarvelSeries[];
}

export interface MarvelSeries {
  id: number;
  title: string;
  description: string | null;
  resourceURI: string;
  urls: MarvelUrl[];
  startYear: number;
  endYear: number;
  rating: string;
  type: string;
  modified: string;
  thumbnail: MarvelThumbnail;
  creators: MarvelCreators;
  characters: MarvelCharacters;
  stories: MarvelStories;
  comics: MarvelComics;
  events: MarvelEvents;
  next: MarvelSeries | null;
  previous: MarvelSeries | null;
}

interface MarvelUrl {
  type: string;
  url: string;
}

interface MarvelThumbnail {
  path: string;
  extension: string;
}

interface MarvelCreators {
  available: number;
  collectionURI: string;
  items: MarvelCreatorItem[];
  returned: number;
}

interface MarvelCreatorItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface MarvelCharacters {
  available: number;
  collectionURI: string;
  items: MarvelCharacterItem[];
  returned: number;
}

interface MarvelCharacterItem {
  resourceURI: string;
  name: string;
}

interface MarvelStories {
  available: number;
  collectionURI: string;
  items: MarvelStoryItem[];
  returned: number;
}

interface MarvelStoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface MarvelComics {
  available: number;
  collectionURI: string;
  items: MarvelComicItem[];
  returned: number;
}

interface MarvelComicItem {
  resourceURI: string;
  name: string;
}

interface MarvelEvents {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}
