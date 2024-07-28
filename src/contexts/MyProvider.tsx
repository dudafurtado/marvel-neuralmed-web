'use client';
import { ReactNode, useState } from 'react';
import MyContext from './MyContext';

interface MyProviderProps {
  children: ReactNode;
}

export default function MyProvider({ children }: MyProviderProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [totalOfPages, setTotalOfPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  const values = {
    searchTerm,
    setSearchTerm,
    totalOfPages,
    setTotalOfPages,
    currentPage,
    setCurrentPage,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
