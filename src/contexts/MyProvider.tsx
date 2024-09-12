'use client';
import { useState, useRef } from 'react';
import MyContext from './MyContext';
import { MyProviderProps } from '@/interfaces/contextInterfaces';
import { CharacterContentModified } from '@/interfaces/characterDetailsInterfaces';
import { CharactersDataModified } from '@/interfaces/charactersInterfaces';

export default function MyProvider({ children }: MyProviderProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allData, setAllData] = useState<CharactersDataModified[]>([]);
  const [howManyCharacters, setHowManyCharacters] = useState<number>(0);
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
    currentPage,
    setCurrentPage,
    allData,
    setAllData,
    howManyCharacters,
    setHowManyCharacters,
    characters,
    setCharacters,
    currentCharacter,
    setCurrentCharacter,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
