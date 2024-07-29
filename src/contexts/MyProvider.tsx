'use client';
import { useState } from 'react';
import MyContext from './MyContext';
import { MyProviderProps } from '@/interfaces/contextInterfaces';
import { CharacterContentModified } from '@/interfaces/characterDetailsInterfaces';

export default function MyProvider({ children }: MyProviderProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [totalOfCharacters, setTotalOfCharacters] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [character, setCharacter] = useState<CharacterContentModified>({
    id: 0,
    name: '',
    description: '',
    src: '',
    urls: {
      comics: '',
      events: '',
      series: '',
    },
  });

  const values = {
    searchTerm,
    setSearchTerm,
    totalOfCharacters,
    setTotalOfCharacters,
    currentPage,
    setCurrentPage,
    character,
    setCharacter,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
