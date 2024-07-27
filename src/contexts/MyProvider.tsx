'use client';
import { ReactNode, useState } from 'react';
import MyContext from './MyContext';

interface MyProviderProps {
  children: ReactNode;
}

export default function MyProvider({ children }: MyProviderProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const values = {
    searchTerm,
    setSearchTerm,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
