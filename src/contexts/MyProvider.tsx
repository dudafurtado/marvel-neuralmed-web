'use client';
import { useState } from 'react';
import MyContext from './MyContext';
import { MyProviderProps } from '@/interfaces/contextInterfaces';
import { CharacterContentModified } from '@/interfaces/characterDetailsInterfaces';
import { CharactersDataModified } from '@/interfaces/charactersInterfaces';

export default function MyProvider({ children }: MyProviderProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [howManyCharacters, setHowManyCharacters] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allData, setAllData] = useState<CharactersDataModified[]>([]);
  const [characters, setCharacters] = useState<CharactersDataModified[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<CharacterContentModified>({
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
    howManyCharacters,
    setHowManyCharacters,
    currentPage,
    setCurrentPage,
    allData,
    setAllData,
    currentCharacter,
    setCurrentCharacter,
    characters,
    setCharacters,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
