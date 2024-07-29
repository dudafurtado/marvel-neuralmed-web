'use client';
import { useEffect, useState } from 'react';
import useMyContext from '@/contexts/useMyContext';
import renderPageNumbers from '@/utils/pagination';

export default function FooterPagination() {
  const { currentPage, setCurrentPage, totalOfCharacters } = useMyContext();
  const [pages, setPages] = useState<(number | string)[]>([]);

  function handlePageChange(page: number | string): void {
    if (page !== '...') {
      setCurrentPage(Number(page));
    }
  }

  useEffect(() => {
    setPages(renderPageNumbers(currentPage, totalOfCharacters));
  }, [totalOfCharacters, currentPage]);

  return (
    <nav className="flex items-center justify-center space-x-2 border-t-2 border-border-grey py-2.5 mt-8">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded ${
            currentPage === page ? 'bg-gray-700 text-white' : 'text-gray-400'
          }`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
    </nav>
  );
}
