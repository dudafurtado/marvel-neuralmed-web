import { ReactNode } from 'react';
import { CharacterContentModified } from './characterDetailsInterfaces';

export interface MyContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalOfCharacters: number;
  setTotalOfCharacters: (term: number) => void;
  currentPage: number;
  setCurrentPage: (term: number) => void;
  character: CharacterContentModified;
  setCharacter: (term: CharacterContentModified) => void;
}

export interface MyProviderProps {
  children: ReactNode;
}
