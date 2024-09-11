'use client';
import useMyContext from '@/contexts/useMyContext';

export default function CharacterDetails() {
  const { currentCharacter } = useMyContext();

  return (
    <>
      <section className="flex items-center text-white font-inter mb-8">
        <img src={currentCharacter.src} alt="Imagem do personagem" className="h-80" />
        <div className="px-16">
          <h1 className="font-bold text-3xl">{currentCharacter.name}</h1>
          <p className="font-medium text-xl">{currentCharacter.description}</p>
        </div>
      </section>
    </>
  );
}
