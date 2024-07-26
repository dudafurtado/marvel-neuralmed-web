'use client';
import React, { useState } from 'react';

interface PaginationProps {
  totalPages: number;
}

const FooterPagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(pageNumber: number | string): void {
    if (pageNumber !== '...') {
      setCurrentPage(Number(pageNumber));
    }
  }

  function renderPageNumbers(): (JSX.Element | null)[] {
    const pageNumbers: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        pageNumbers.unshift('...');
        pageNumbers.unshift(1);
      }

      if (endPage < totalPages) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) => (
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
    ));
  }

  return (
    <nav className="flex items-center justify-center space-x-2 border-t-2 border-border-grey py-2.5 mt-4">
      {renderPageNumbers()}
    </nav>
  );
};

export default FooterPagination;
