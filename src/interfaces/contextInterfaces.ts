import { ReactNode } from 'react';
import { CharacterContentModified } from './characterDetailsInterfaces';
import { CharactersDataModified } from './charactersInterfaces';

export interface MyContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  howManyCharacters: number;
  setHowManyCharacters: (term: number) => void;
  currentPage: number;
  setCurrentPage: (term: number) => void;
  currentCharacter: CharacterContentModified;
  setCurrentCharacter: (term: CharacterContentModified) => void;
  allData: CharactersDataModified[];
  setAllData: (term: CharactersDataModified[]) => void;
  characters: CharactersDataModified[];
  setCharacters: (term: CharactersDataModified[]) => void;
}

export interface MyProviderProps {
  children: ReactNode;
}
