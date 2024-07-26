'use client';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { characterDetails } from '@/server/fetchMarvelAPI';
import { Character, CharacterModified } from '@/interfaces/characterDetailsInterfaces';
import { MarvelError } from '@/interfaces/errorInterface';

export default function CharacterDetails() {
  const [character, setCharacter] = useState<CharacterModified>({
    id: 0,
    name: '',
    description: '',
    src: '',
  });

  useEffect(() => {
    async function loadCharacter() {
      toast.loading('Waiting...');

      const data: Character = await characterDetails(1009146);
      setCharacter({
        id: data.id,
        name: data.name,
        description: data.description,
        src: data.thumbnail.path + '.' + data.thumbnail.extension,
      });

      toast.dismiss();
      try {
      } catch (err: unknown) {
        const error = err as MarvelError;
        toast.error(`Error: ${error.message}`);
      }
    }

    loadCharacter();
  }, []);

  return (
    <>
      <section className="flex items-center text-white font-inter mb-8">
        <img src={character.src} alt="Imagem do personagem" className="h-80" />
        <div className="px-16">
          <h1 className="font-bold text-3xl">{character.name}</h1>
          <p className="font-medium text-xl">{character.description}</p>
        </div>
      </section>
      <Toaster />
    </>
  );
}
