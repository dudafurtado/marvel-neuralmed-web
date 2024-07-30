import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CharacterLists from '../src/components/CharacterLists';
import * as fetchMarvelAPI from '@/server/fetchMarvelAPI';
import * as cleaningDataFetch from '@/utils/cleaningDataFetch';
import { mockComics, mockComicsDataCleaned } from './mocks/comicsMocks';
import { mockEvents, mockEventsDataCleaned } from './mocks/eventsMocks';
import { mockSeries, mockSeriesDataCleaned } from './mocks/seriesMocks';

vi.mock('@/server/fetchMarvelAPI');
vi.mock('@/utils/cleaningDataFetch');

describe('CharacterLists Component', () => {
  it('renders the list of comics', async () => {
    vi.spyOn(fetchMarvelAPI, 'characterDetailContent').mockResolvedValue(mockComics);
    vi.spyOn(cleaningDataFetch, 'dataCharacterContent').mockReturnValue(
      mockComicsDataCleaned
    );

    render(<CharacterLists typeOfList="comics" />);

    expect(screen.getByText('Carregando conteúdo...')).toBeInTheDocument();

    await waitFor(() => {
      mockComicsDataCleaned.forEach((comic) => {
        expect(screen.getByText(comic.title)).toBeInTheDocument();
        expect(screen.getByText(comic.description)).toBeInTheDocument();
      });
    });

    expect(screen.queryByText('Carregando conteúdo...')).not.toBeInTheDocument();
  });

  it('renders the list of events', async () => {
    vi.spyOn(fetchMarvelAPI, 'characterDetailContent').mockResolvedValue(mockEvents);
    vi.spyOn(cleaningDataFetch, 'dataCharacterContent').mockReturnValue(
      mockEventsDataCleaned
    );

    render(<CharacterLists typeOfList="events" />);

    expect(screen.getByText('Carregando conteúdo...')).toBeInTheDocument();

    await waitFor(() => {
      mockEventsDataCleaned.forEach((event) => {
        expect(screen.getByText(event.title)).toBeInTheDocument();
        expect(screen.getByText(event.description)).toBeInTheDocument();
      });
    });

    expect(screen.queryByText('Carregando conteúdo...')).not.toBeInTheDocument();
  });

  it('renders the list of series', async () => {
    vi.spyOn(fetchMarvelAPI, 'characterDetailContent').mockResolvedValue(mockSeries);
    vi.spyOn(cleaningDataFetch, 'dataCharacterContent').mockReturnValue(
      mockSeriesDataCleaned
    );

    render(<CharacterLists typeOfList="series" />);

    expect(screen.getByText('Carregando conteúdo...')).toBeInTheDocument();

    await waitFor(() => {
      mockSeriesDataCleaned.forEach((series) => {
        expect(screen.getByText(series.title)).toBeInTheDocument();
        expect(screen.getByText(series.description)).toBeInTheDocument();
      });
    });

    expect(screen.queryByText('Carregando conteúdo...')).not.toBeInTheDocument();
  });
});
