import { ReactNode } from 'react';
import { CharacterContentModified } from './characterDetailsInterfaces';
import { CharactersDataModified } from './charactersInterfaces';

export interface MyContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  currentPage: number;
  setCurrentPage: (term: number) => void;
  allData: CharactersDataModified[];
  setAllData: (term: CharactersDataModified[]) => void;
  howManyCharacters: number;
  setHowManyCharacters: (term: number) => void;
  characters: CharactersDataModified[];
  setCharacters: (term: CharactersDataModified[]) => void;
  currentCharacter: CharacterContentModified;
  setCurrentCharacter: (term: CharacterContentModified) => void;
}

export interface MyProviderProps {
  children: ReactNode;
}
