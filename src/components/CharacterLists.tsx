'use client';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { characterLists } from '@/server/fetchMarvelAPI';
import { MarvelError } from '@/interfaces/errorInterface';
import { DataRestructured } from '@/interfaces/characterDataCleanedInterface';

export default function CharacterLists({ typeOfList }: any) {
  const [content, setContent] = useState<DataRestructured[]>([]);

  useEffect(() => {
    async function loadCharacterEvents() {
      toast.loading('Waiting...');

      const data = await characterLists(1009146, typeOfList);
      const dataCleaned: any = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          description: item.description ? `${item.description.substring(0, 100)}...` : '',
          src: item.thumbnail ? `${item.thumbnail.path}.${item.thumbnail.extension}` : '',
        };
      });
      setContent(dataCleaned);

      toast.dismiss();
      try {
      } catch (err: unknown) {
        const error = err as MarvelError;
        toast.error(`Error: ${error.message}`);
      }
    }

    loadCharacterEvents();
  }, []);

  return (
    <>
      <section className="text-inter mb-24 px-32">
        <h2 className="font-semibold text-lg text-muted-foreground mb-5">
          {typeOfList === 'stories'
            ? 'Histórias'
            : typeOfList === 'events'
            ? 'Eventos'
            : 'Séries'}
        </h2>
        <section className="flex flex-wrap gap-10 text-white">
          {content.map((content: DataRestructured) => (
            <section
              key={content.id}
              className={
                typeOfList === 'stories'
                  ? 'border border-border-grey w-64 h-52'
                  : 'border border-border-grey w-64 h-custom-110'
              }
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
