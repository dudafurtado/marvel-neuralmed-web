import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FooterPagination from '@/components/FooterPagination';
import useMyContext from '@/contexts/useMyContext';
import * as paginationUtils from '@/utils/pagination';

vi.mock('@/contexts/useMyContext');
vi.mock('@/utils/pagination');
vi.mock('@/contexts/useMyContext', () => ({
  __esModule: true,
  default: () => ({
    currentPage: 1,
    setCurrentPage: vi.fn(),
    totalOfCharacters: 50,
  }),
}));

describe('FooterPagination Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders pagination buttons based on the total number of characters', () => {
    const mockSetCurrentPage = vi.fn();

    (useMyContext as any).mockReturnValue({
      currentPage: 1,
      setCurrentPage: mockSetCurrentPage,
      totalOfCharacters: 50,
    });

    const mockRenderPageNumbers = vi.fn().mockReturnValue([1, 2, 3, 4, 5]);
    (paginationUtils as any).renderPageNumbers = mockRenderPageNumbers;

    render(<FooterPagination />);

    [1, 2, 3, 4, 5].forEach((page) => {
      expect(screen.getByText(page)).toBeInTheDocument();
    });
  });

  it('changes the page when a page number is clicked', () => {
    const setCurrentPage = vi.fn();

    (useMyContext as any).mockReturnValue({
      currentPage: 1,
      setCurrentPage,
      totalOfCharacters: 50,
    });

    (paginationUtils as any).renderPageNumbers = vi.fn().mockReturnValue([1, 2, 3, 4, 5]);

    render(<FooterPagination />);

    fireEvent.click(screen.getByText(2));

    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });

  it('disables the "..." button and does not call setCurrentPage when clicked', () => {
    const setCurrentPage = vi.fn();

    (useMyContext as any).mockReturnValue({
      currentPage: 1,
      setCurrentPage,
      totalOfCharacters: 100,
    });

    (paginationUtils as any).renderPageNumbers = vi
      .fn()
      .mockReturnValue([1, 2, '...', 10]);

    render(<FooterPagination />);

    const ellipsisButton = screen.getByText('...');
    expect(ellipsisButton).toBeDisabled();

    fireEvent.click(ellipsisButton);

    expect(setCurrentPage).not.toHaveBeenCalled();
  });

  it('displays the correct number of pages when there are more than maxPagesToShow', () => {
    (useMyContext as any).mockReturnValue({
      currentPage: 3,
      setCurrentPage: vi.fn(),
      totalOfCharacters: 100,
    });

    (paginationUtils as any).renderPageNumbers = vi
      .fn()
      .mockReturnValue([1, 2, 3, 4, 5, '...', 10]);

    render(<FooterPagination />);

    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
    expect(screen.getByText(5)).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText(10)).toBeInTheDocument();
  });
});
