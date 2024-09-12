'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
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
    setAllData,
    setCurrentCharacter,
    searchTerm,
  } = useMyContext();
  const allDataRef = useRef<CharactersDataModified[]>([]);

  const handleShowCharacterDetails = (character: CharactersDataModified) => {
    const { series, events, ...arg } = character;
    setCurrentCharacter(arg);
    router.push('/character');
  };

  useEffect(() => {
    const filteredData = allDataRef.current.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const pageCharacters = filteredData.slice(startIndex, endIndex);

    setCharacters(pageCharacters);
  }, [currentPage, searchTerm, allDataRef.current]);

  useEffect(() => {
    async function loadCharacters() {
      let offset = allDataRef.current.length;

      try {
        toast.loading('Carregando personagens...');

        if (howManyCharacters === 0) {
          const { total } = await listCharacters(0);
          setHowManyCharacters(total);
        }

        while (offset < howManyCharacters) {
          console.log(offset);
          const { results } = await listCharacters(offset);
          const newResult = dataCharacters(results);

          allDataRef.current = [...allDataRef.current, ...newResult];
          setAllData([...allDataRef.current]);
          offset += 20;
        }
      } catch (err: unknown) {
        const error = err as MarvelError;
        toast.error(`Error: ${error.message}`);
      } finally {
        toast.dismiss();
      }
    }

    loadCharacters();
  }, [howManyCharacters]);

  return (
    <>
      <main className="px-9 text-white text-inter">
        <section className="grid grid-cols-3 gap-4 text-left text-muted-foreground font-semibold text-base mb-4">
          <div className="font-bold">Personagem</div>
          <div className="font-bold">Séries</div>
          <div className="font-bold">Eventos</div>
        </section>
        {characters.length > 0
          ? characters.map((character: CharactersDataModified | null, index) =>
              character ? (
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
              ) : (
                ''
              )
            )
          : ''}
      </main>
      <Toaster />
    </>
  );
}
