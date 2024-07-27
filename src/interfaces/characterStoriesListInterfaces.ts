export interface MarvelStoriesResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelStoriesData;
}

interface MarvelStoriesData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: MarvelStory[];
}

export interface MarvelStory {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: string;
  thumbnail: MarvelThumbnail | null;
  creators: MarvelCreators;
  characters: MarvelCharacters;
  series: MarvelSeries;
  comics: MarvelComics;
  events: MarvelEvents;
  originalIssue: MarvelOriginalIssue;
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

interface MarvelSeries {
  available: number;
  collectionURI: string;
  items: MarvelSeriesItem[];
  returned: number;
}

interface MarvelSeriesItem {
  resourceURI: string;
  name: string;
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

interface MarvelOriginalIssue {
  resourceURI: string;
  name: string;
}
