import { listCharacters } from '@/server/fetchMarvelAPI';

describe('Fetch Marvel API Import Test', () => {
  it('should import listCharacters function', () => {
    expect(listCharacters).toBeDefined();
  });
});
