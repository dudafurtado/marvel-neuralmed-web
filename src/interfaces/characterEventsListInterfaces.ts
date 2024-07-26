export default interface MarvelEventResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelEventData;
}

interface MarvelEventData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: MarvelEvent[];
}

export interface MarvelEvent {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  modified: string;
  start: string;
  end: string;
  thumbnail: Thumbnail;
  creators: CreatorData;
  characters: CharacterData;
  stories: StoryData;
  comics: ComicData;
  series: SeriesData;
  next: EventSummary;
  previous: EventSummary;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface CreatorData {
  available: number;
  collectionURI: string;
  items: Creator[];
  returned: number;
}

interface Creator {
  resourceURI: string;
  name: string;
  role: string;
}

interface CharacterData {
  available: number;
  collectionURI: string;
  items: Character[];
  returned: number;
}

interface Character {
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

interface EventSummary {
  resourceURI: string;
  name: string;
}

interface Url {
  type: string;
  url: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  src: string;
}
