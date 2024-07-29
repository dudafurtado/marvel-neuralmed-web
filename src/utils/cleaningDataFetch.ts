import { MarvelCharacter } from '@/interfaces/charactersInterfaces';
import { MarvelComic } from '@/interfaces/comicsInterfaces';
import { MarvelEvent } from '@/interfaces/eventsInterfaces';
import { MarvelSeries } from '@/interfaces/seriesInterfaces';

export default function mapSeriesAndEvents(
  items: { resourceURI: string; name: string }[],
  message: string
) {
  let mappedItems: { id: number; name: string }[] = items
    .slice(0, 3)
    .map((item, i) => ({ id: i, name: item.name }));

  if (mappedItems.length === 0) {
    mappedItems = [{ id: 1, name: message }];
  }

  return mappedItems;
}

export function dataCharacters(data: MarvelCharacter[]) {
  return data.map((character: MarvelCharacter) => {
    return {
      id: character.id,
      name: character.name,
      description: character.description,
      src: character.thumbnail.path + '.' + character.thumbnail.extension,
      series: mapSeriesAndEvents(character.series.items, 'Nenhuma serie encontrada'),
      events: mapSeriesAndEvents(character.events.items, 'Nenhum evento encontrado'),
      urls: {
        comics: character.comics.collectionURI,
        events: character.events.collectionURI,
        series: character.series.collectionURI,
      },
    };
  });
}

export function dataCharacterContent(
  data: MarvelComic[] | MarvelEvent[] | MarvelSeries[]
) {
  return data.map((content: MarvelComic | MarvelEvent | MarvelSeries) => {
    return {
      id: content.id,
      title: content.title,
      description: content.description
        ? `${content.description.substring(0, 100)}...`
        : '',
      src: content.thumbnail
        ? `${content.thumbnail.path}.${content.thumbnail.extension}`
        : '',
    };
  });
}
