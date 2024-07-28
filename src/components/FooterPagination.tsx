'use client';
import useMyContext from '@/contexts/useMyContext';
import renderPageNumbers from '@/utils/pagination';
import { useEffect, useState } from 'react';

export default function FooterPagination() {
  const { currentPage, setCurrentPage, totalOfPages } = useMyContext();
  const [pages, setPages] = useState<(number | string)[]>([]);

  function handlePageChange(pageNumber: number | string): void {
    if (pageNumber !== '...') {
      setCurrentPage(Number(pageNumber));
    }
  }

  useEffect(() => {
    const arrayOfPages = renderPageNumbers(currentPage, totalOfPages);
    setPages(arrayOfPages);
  }, [currentPage]);

  return (
    <nav className="flex items-center justify-center space-x-2 border-t-2 border-border-grey py-2.5 mt-4">
      {pages.map((number, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(number)}
          className={`px-4 py-2 rounded ${
            currentPage === number ? 'bg-gray-700 text-white' : 'text-gray-400'
          }`}
          disabled={number === '...'}
        >
          {number}
        </button>
      ))}
    </nav>
  );
}
