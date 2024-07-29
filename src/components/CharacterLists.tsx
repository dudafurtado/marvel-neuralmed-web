'use client';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { characterLists } from '@/server/fetchMarvelAPI';
import { MarvelError } from '@/interfaces/errorInterface';
import { DataRestructured } from '@/interfaces/characterDataCleanedInterface';
import useMyContext from '@/contexts/useMyContext';
import { dataCharacterContent } from '@/utils/cleaningDataFetch';

export default function CharacterLists({ typeOfList }: any) {
  const [content, setContent] = useState<any[]>([]);
  const { character } = useMyContext();

  useEffect(() => {
    async function loadCharacterContent() {
      try {
        toast.loading('Carregando conteúdo...');

        let data = await characterLists(character.urls, typeOfList);
        data = dataCharacterContent(data);

        setContent(data);

        toast.dismiss();
      } catch (err: unknown) {
        const error = err as MarvelError;
        toast.error(`Error: ${error.message}`);
      } finally {
        toast.dismiss();
      }
    }

    loadCharacterContent();
  }, []);

  return (
    <>
      <section className="px-32 mb-24 text-inter">
        <h2 className="font-semibold text-lg text-muted-foreground mb-5">
          {typeOfList === 'comics'
            ? 'Histórias em quadrinhos'
            : typeOfList === 'events'
            ? 'Eventos'
            : 'Séries'}
        </h2>
        <section className="flex flex-wrap gap-10 text-white">
          {content.map((content: DataRestructured) => (
            <section
              key={content.id}
              className="w-64 h-custom-110 border border-border-grey rounded"
            >
              {content.src ? (
                <img
                  src={content.src}
                  alt={content.title}
                  className="w-64 h-64 border-b-4 border-border-red"
                />
              ) : (
                ''
              )}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-4">{content.title}</h3>
                <p className="font-normal text-sm">{content.description}</p>
              </div>
            </section>
          ))}
        </section>
      </section>
      <Toaster />
    </>
  );
}
