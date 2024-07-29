'use client';
import useMyContext from '@/contexts/useMyContext';

export default function CharacterDetails() {
  const { character } = useMyContext();

  return (
    <>
      <section className="flex items-center text-white font-inter mb-8">
        <img src={character.src} alt="Imagem do personagem" className="h-80" />
        <div className="px-16">
          <h1 className="font-bold text-3xl">{character.name}</h1>
          <p className="font-medium text-xl">{character.description}</p>
        </div>
      </section>
    </>
  );
}
