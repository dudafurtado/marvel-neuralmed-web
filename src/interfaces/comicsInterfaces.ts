export interface MarvelComicsResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelComicData;
}

interface MarvelComicData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: MarvelComic[];
}

export interface MarvelComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Variant[];
  collections: Collection[];
  collectedIssues: CollectedIssue[];
  dates: ComicDate[];
  prices: Price[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorList;
  characters: CharacterList;
  stories: StoryList;
  events: EventList;
}

interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Url {
  type: string;
  url: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface Variant {
  resourceURI: string;
  name: string;
}

interface Collection {
  resourceURI: string;
  name: string;
}

interface CollectedIssue {
  resourceURI: string;
  name: string;
}

interface ComicDate {
  type: string;
  date: string;
}

interface Price {
  type: string;
  price: number;
}

interface Image {
  path: string;
  extension: string;
}

interface CreatorList {
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

interface CharacterList {
  available: number;
  collectionURI: string;
  items: Character[];
  returned: number;
}

interface Character {
  resourceURI: string;
  name: string;
}

interface StoryList {
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

interface EventList {
  available: number;
  collectionURI: string;
  items: Event[];
  returned: number;
}

interface Event {
  resourceURI: string;
  name: string;
}
