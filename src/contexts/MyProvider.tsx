'use client';
import { ReactNode, useState } from 'react';
import MyContext from './MyContext';

interface MyProviderProps {
  children: ReactNode;
}

export default function MyProvider({ children }: MyProviderProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [totalOfCharacters, setTotalOfCharacters] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [characterId, setCharacterId] = useState<number>(0);

  const values = {
    searchTerm,
    setSearchTerm,
    totalOfCharacters,
    setTotalOfCharacters,
    currentPage,
    setCurrentPage,
    characterId,
    setCharacterId,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
