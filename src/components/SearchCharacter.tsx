'use client';
import Image from 'next/image';
import SearchLogo from '../../public/search-logo.svg';
import useMyContext from '@/contexts/useMyContext';

export default function SearchCharacter() {
  const { setSearchTerm } = useMyContext();

  return (
    <section className="text-white font-inter px-8 mb-5 mt-8">
      <h1 className="text-3xl font-semibold mb-6">Busca de Personagens</h1>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium mb-2">
          Nome do personagem
        </label>
        <div className="flex">
          <input
            id="seach"
            name="search"
            type="text"
            placeholder="Digite um nome para pesquisar"
            className="w-96 rounded-md bg-transparent py-1.5 pl-4 pr-12 text-white border border-border-grey placeholder:text-muted-foreground"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Image
            src={SearchLogo}
            alt="Icone de pesquisa"
            className="w-auto relative right-7 top-0"
            width={16}
            height={16}
          />
        </div>
      </div>
    </section>
  );
}
