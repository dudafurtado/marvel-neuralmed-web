'use client';
import { createContext } from 'react';

interface Character {
  id: number;
  name: string;
  description: string;
  src: string;
  urls: {
    comics: string;
    events: string;
    series: string;
  };
}

interface MyContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalOfCharacters: number;
  setTotalOfCharacters: (term: number) => void;
  currentPage: number;
  setCurrentPage: (term: number) => void;
  character: Character;
  setCharacter: (term: Character) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
