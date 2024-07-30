import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import MarvelCharacters from '../src/components/MarvelCharacters';
import * as fetchMarvelAPI from '@/server/fetchMarvelAPI';
import { dataCharacters } from '@/utils/cleaningDataFetch';
import useMyContext from '@/contexts/useMyContext';
import { useRouter } from 'next/navigation';
import { mockCharacters, mockCharactersDataCleaned } from './mocks/charactersMocks';
import {
  NavigateOptions,
  PrefetchOptions,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';

vi.mock('@/server/fetchMarvelAPI');
vi.mock('@/utils/cleaningDataFetch');
vi.mock('@/contexts/useMyContext', () => ({
  __esModule: true,
  default: () => ({
    currentPage: 1,
    setCurrentPage: vi.fn(),
    totalOfCharacters: 50,
  }),
}));
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

describe('MarvelCharacters Component', () => {
  beforeEach(() => {
    vi.spyOn(fetchMarvelAPI, 'listCharacters').mockResolvedValue({
      results: mockCharacters,
      total: 2,
    });
    vi.mocked(dataCharacters).mockReturnValue(mockCharactersDataCleaned);

    const mockSetTotalOfCharacters = vi.fn();
    const mockSetCharacter = vi.fn();

    (useMyContext as any).mockReturnValue({
      searchTerm: '',
      currentPage: 1,
      setTotalOfCharacters: mockSetTotalOfCharacters,
      setCharacter: mockSetCharacter,
    });

    vi.mocked(useRouter).mockReturnValue({
      push: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
    });
  });

  it('renders the list of characters and loads data', async () => {
    render(<MarvelCharacters />);

    expect(screen.getByText('Carregando conteúdo...')).toBeInTheDocument();

    await waitFor(() => {
      mockCharactersDataCleaned.forEach((character) => {
        expect(screen.getByText(character.name)).toBeInTheDocument();
      });
    });

    expect(screen.queryByText('Carregando conteúdo...')).not.toBeInTheDocument();
  });

  it('filters characters based on the search term', async () => {
    const mockSetTotalOfCharacters = vi.fn();
    const mockSetCharacter = vi.fn();

    (useMyContext as any).mockReturnValue({
      searchTerm: 'Spider-Man',
      currentPage: 1,
      setTotalOfCharacters: mockSetTotalOfCharacters,
      setCharacter: mockSetCharacter,
    });

    render(<MarvelCharacters />);

    await waitFor(() => {
      expect(screen.getByText('Spider-Man')).toBeInTheDocument();
      expect(screen.queryByText('Iron Man')).not.toBeInTheDocument();
    });
  });

  it('navigates to the character details page on character click', async () => {
    const { push } = useRouter();

    render(<MarvelCharacters />);

    await waitFor(() => {
      expect(screen.getByText('Spider-Man')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Spider-Man'));

    expect(push).toHaveBeenCalledWith('/character');
  });
});
