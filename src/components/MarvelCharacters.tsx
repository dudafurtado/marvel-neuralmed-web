'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { listCharacters } from '@/server/fetchMarvelAPI';
import useMyContext from '@/contexts/useMyContext';
import {
  CharactersDataModified,
  SeriesAndEventsModified,
} from '@/interfaces/charactersInterfaces';
import { MarvelError } from '@/interfaces/errorInterface';
import { dataCharacters } from '@/utils/cleaningDataFetch';

export default function MarvelCharacters() {
  const router = useRouter();
  const {
    characters,
    setCharacters,
    currentPage,
    howManyCharacters,
    setHowManyCharacters,
    allData,
    setAllData,
    setCurrentCharacter,
  } = useMyContext();

  function handleShowCharacterDetails(character: CharactersDataModified) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { series, events, ...arg } = character;
    setCurrentCharacter(arg);
    router.push('/character');
  }

  useEffect(() => {
    setCharacters(allData.slice((currentPage - 1) * 10, 10));
  }, [currentPage]);

  useEffect(() => {
    async function loadCharacters() {
      let allComics: CharactersDataModified[] = [];
      let offset = 0;
      let totalOfCharacters = 0;

      try {
        toast.loading('Carregando conteúdo...');

        if (howManyCharacters !== 1564) {
          do {
            const { results, total } = await listCharacters(offset);
            const newResult = dataCharacters(results);

            allComics = [...allData, ...newResult];

            setAllData(allComics);
            setHowManyCharacters(total);

            totalOfCharacters = total;
            offset += 20;
          } while (offset < totalOfCharacters);
        }
      } catch (err: unknown) {
        const error = err as MarvelError;
        toast.error(`Error: ${error.message}`);
      } finally {
        toast.dismiss();
      }
    }

    loadCharacters();
  }, []);

  return (
    <>
      <main className="px-9 text-white text-inter">
        <section className="grid grid-cols-3 gap-4 text-left text-muted-foreground font-semibold text-base mb-4">
          <div className="font-bold">Personagem</div>
          <div className="font-bold">Séries</div>
          <div className="font-bold">Eventos</div>
        </section>
        {characters.map((character: CharactersDataModified) => (
          <section
            key={character.id}
            className="grid grid-cols-3 gap-4 text-left border border-border-grey rounded px-5 py-4 mb-4 cursor-pointer"
            onClick={() => handleShowCharacterDetails(character)}
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
          </section>
        ))}
      </main>
      <Toaster />
    </>
  );
}
