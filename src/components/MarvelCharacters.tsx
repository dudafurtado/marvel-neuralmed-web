'use client';
import { useEffect, useState } from 'react';
import fetchMarvelAPI from '@/utils/params-url-marvel';

interface SeriesAndEvents {
  resourceURI: string;
  name: string;
}

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: SeriesAndEvents[];
  };
  events: {
    items: SeriesAndEvents[];
  };
}

export default function MarvelCharacters() {
  const [characters, setCharacters] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCharacters() {
      try {
        const data = await fetchMarvelAPI('/v1/public/characters');
        setCharacters(data);
        console.log('Data fetched:', data);
      } catch (err: any) {
        setError(err.message);
        console.error('Fetch error:', err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const charactersDataCleaned = characters.map((character: any) => {
    let series = character.series.items.map((series: SeriesAndEvents, i: number) => {
      if (i <= 3) {
        return series.name;
      }
    });

    if (series.length === 0) {
      series = ['Nenhuma serie encontrada'];
    }

    let events = character.events.items.map((event: SeriesAndEvents, i: number) => {
      if (i <= 3) {
        return event.name;
      }
    });

    if (events.length === 0) {
      events = ['Nenhum evento encontrado'];
    }

    return {
      id: character.id,
      src: character.thumbnail.path + '.' + character.thumbnail.extension,
      name: character.name,
      series,
      events,
    };
  });

  return (
    <div className="w-full px-9 text-white text-inter">
      <div className="grid grid-cols-3 gap-4 text-left text-muted-foreground font-semibold text-base mb-4">
        <div className="font-bold">Personagem</div>
        <div className="font-bold">Séries</div>
        <div className="font-bold">Eventos</div>
      </div>
      {charactersDataCleaned.map((character: any) => (
        <div
          key={character.id}
          className="grid grid-cols-3 gap-4 text-left border border-border rounded px-5 py-4 mb-4"
        >
          <div className="flex items-center gap-4">
            <img src={character.src} alt="" className="w-11 h-11" />
            <h3 className="font-semibold text-sm">{character.name}</h3>
          </div>
          <div className="flex flex-col justify-center">
            {character.series.map((name: string) => (
              <h4 key={name} className="text-white">
                {name}
              </h4>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            {character.events.map((name: string) => (
              <h4 key={name} className="text-white">
                {name}
              </h4>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
