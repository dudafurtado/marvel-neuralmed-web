'use client';
import { createContext } from 'react';

interface MyContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
