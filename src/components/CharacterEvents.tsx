'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { listCharacterEvents } from '@/server/fetchMarvelAPI';

interface Events {
  id: number;
  title: string;
  description: string;
  src: string;
}

export default function CharacterEvents() {
  const [events, setEvents] = useState<Events[]>([]);

  useEffect(() => {
    async function loadCharacterEvents() {
      toast.loading('Waiting...');

      let data = await listCharacterEvents(1009146);
      data = await data.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          src: item.thumbnail.path + '.' + item.thumbnail.extension,
        };
      });
      setEvents(data);

      toast.dismiss();
      try {
      } catch (err: any) {
        toast.error(`Error: ${err.message}`);
      }
    }

    loadCharacterEvents();
  }, []);

  return (
    <main className="text-inter mb-24">
      <h2 className="text-muted-background">Eventos</h2>
      <section className="flex flex-wrap px-32">
        {events.map((event) => (
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
  );
}
