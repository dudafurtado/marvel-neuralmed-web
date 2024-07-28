'use client';
import { createContext } from 'react';

interface MyContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalOfPages: number;
  setTotalOfPages: (term: number) => void;
  currentPage: number;
  setCurrentPage: (term: number) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
