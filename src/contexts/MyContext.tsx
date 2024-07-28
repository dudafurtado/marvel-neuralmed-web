'use client';
import { createContext } from 'react';

interface MyContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalOfCharacters: number;
  setTotalOfCharacters: (term: number) => void;
  currentPage: number;
  setCurrentPage: (term: number) => void;
  characterId: number;
  setCharacterId: (term: number) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
