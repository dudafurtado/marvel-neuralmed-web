'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { listCharacters } from '@/server/fetchMarvelAPI';
import { SeriesAndEventsModified } from '@/interfaces/characterListInterfaces';
import { MarvelError } from '@/interfaces/errorInterface';
import useMyContext from '@/contexts/useMyContext';
import { dataCharacters } from '@/utils/cleaningDataFetch';

export default function MarvelCharacters() {
  const [allData, setAllData] = useState<any[]>([]);
  const [characters, setCharacters] = useState<any[]>([]);
  const { searchTerm, currentPage, setTotalOfCharacters, setCharacter } = useMyContext();
  const router = useRouter();

  function handleShowCharacterDetails(character: any) {
    setCharacter(character);
    router.push('/character');
  }

  useEffect(() => {
    async function loadCharacters() {
      try {
        toast.loading('Carregando conteúdo...');

        let { results, total }: any = await listCharacters((currentPage - 1) * 10);
        results = dataCharacters(results);

        setAllData(results);
        setCharacters(results.slice(0, 10));
        setTotalOfCharacters(total);
      } catch (err: unknown) {
        const error = err as MarvelError;
        toast.error(`Error: ${error.message}`);
      } finally {
        toast.dismiss();
      }
    }

    loadCharacters();
  }, [currentPage]);

  useEffect(() => {
    const contentSearched = allData.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCharacters(contentSearched);
  }, [searchTerm]);

  return (
    <>
      <main className="max-w-max px-9 text-white text-inter">
        <section className="grid grid-cols-3 gap-4 text-left text-muted-foreground font-semibold text-base mb-4">
          <div className="font-bold">Personagem</div>
          <div className="font-bold">Séries</div>
          <div className="font-bold">Eventos</div>
        </section>
        {characters.map((character: any) => (
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
