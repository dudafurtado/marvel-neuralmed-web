'use client';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { listCharacters } from '@/server/fetchMarvelAPI';
import mapSeriesAndEvents from '@/utils/mapSeriesAndEvents';
import {
  Character,
  MarvelCharacter,
  SeriesAndEventsModified,
} from '@/interfaces/characterListInterfaces';
import { MarvelError } from '@/interfaces/errorInterface';

export default function MarvelCharacters() {
  const [characters, setCharacters] = useState<MarvelCharacter[]>([]);

  useEffect(() => {
    async function loadCharacters() {
      try {
        toast.loading('Waiting...');

        setCharacters(await listCharacters(30));

        toast.dismiss();
      } catch (err: unknown) {
        const error = err as MarvelError;
        toast.error(`Error: ${error.message}`);
      }
    }

    loadCharacters();
  }, []);

  const charactersDataCleaned: Character[] = characters.map(
    (character: MarvelCharacter) => {
      return {
        id: character.id,
        name: character.name,
        src: character.thumbnail.path + '.' + character.thumbnail.extension,
        series: mapSeriesAndEvents(character.series.items, 'Nenhuma serie encontrada'),
        events: mapSeriesAndEvents(character.events.items, 'Nenhum evento encontrado'),
      };
    }
  );

  return (
    <>
      <div className="w-full px-9 text-white text-inter">
        <div className="grid grid-cols-3 gap-4 text-left text-muted-foreground font-semibold text-base mb-4">
          <div className="font-bold">Personagem</div>
          <div className="font-bold">Séries</div>
          <div className="font-bold">Eventos</div>
        </div>
        {charactersDataCleaned.map((character: Character) => (
          <div
            key={character.id}
            className="grid grid-cols-3 gap-4 text-left border border-border-grey rounded px-5 py-4 mb-4"
          >
            <div className="flex items-center gap-4">
              <img src={character.src} alt="" className="w-11 h-11" />
              <h3 className="font-semibold text-sm">{character.name}</h3>
            </div>
            <div className="flex flex-col justify-center">
              {character.series.map((item: SeriesAndEventsModified) => (
                <h4 key={item.id} className="text-white">
                  {item.name}
                </h4>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              {character.events.map((event: SeriesAndEventsModified) => (
                <h4 key={event.id} className="text-white">
                  {event.name}
                </h4>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </>
  );
}
