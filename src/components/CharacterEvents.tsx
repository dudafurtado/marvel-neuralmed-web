'use client';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { listCharacterEvents } from '@/server/fetchMarvelAPI';
import { Event, MarvelEvent } from '@/interfaces/characterEventsListInterfaces';
import { MarvelError } from '@/interfaces/errorInterface';

export default function CharacterEvents() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function loadCharacterEvents() {
      toast.loading('Waiting...');

      const data: MarvelEvent[] = await listCharacterEvents(1009146);
      const dataCleaned: Event[] = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          src: item.thumbnail.path + '.' + item.thumbnail.extension,
        };
      });
      setEvents(dataCleaned);

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
      <main className="text-inter mb-24">
        <h2 className="text-muted-background">Eventos</h2>
        <section className="flex flex-wrap px-32">
          {events.map((event: Event) => (
            <section
              key={event.id}
              className="text-white border border-border-grey w-64 h-custom-110"
            >
              <img src={event.src} alt="" className="w-64 h-64" />
              <div className="p-4 border-t-4 border-red">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </section>
          ))}
        </section>
      </main>
      <Toaster />
    </>
  );
}
