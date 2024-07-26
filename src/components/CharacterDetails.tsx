'use client';

import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { characterDetails } from '@/server/fetchMarvelAPI';

interface Character {
  id: number;
  name: string;
  description: string;
  src: string;
}

export default function CharacterDetails() {
  const [character, setCharacter] = useState<Character>({
    id: 0,
    name: '',
    description: '',
    src: '',
  });

  useEffect(() => {
    async function loadCharacter() {
      toast.loading('Waiting...');

      const data = await characterDetails(1009146);
      setCharacter({
        id: data.id,
        name: data.name,
        description: data.description,
        src: data.thumbnail.path + '.' + data.thumbnail.extension,
      });
      console.log(character);

      toast.dismiss();
      try {
      } catch (err: any) {
        toast.error(`Error: ${err.message}`);
      }
    }

    loadCharacter();
  }, []);

  return (
    <section className="flex items-center text-white font-inter mb-8">
      <img src={character.src} alt="Imagem do personagem" className="h-80" />
      <div className="px-16">
        <h1 className="font-bold text-3xl">{character.name}</h1>
        <p className="font-medium text-xl">{character.description}</p>
      </div>
    </section>
  );
}
