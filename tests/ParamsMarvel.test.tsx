import { describe, it, expect, vi } from 'vitest';
import MD5 from 'crypto-js/md5';
import paramsUrlMarvel from '@/utils/paramsUrlMarvel';

describe('paramsUrlMarvel', () => {
  it('generates the correct URL parameters', () => {
    const mockTs = 1234567890;
    const mockPublicKey = 'testPublicKey';
    const mockPrivateKey = 'testPrivateKey';
    const mockHash = 'testHash';

    vi.spyOn(Date.prototype, 'getTime').mockReturnValue(mockTs);

    const mockMD5 = vi.fn().mockReturnValue({ toString: () => mockHash });
    vi.mock('crypto-js/md5', () => ({
      default: mockMD5,
    }));

    process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY = mockPublicKey;
    process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY = mockPrivateKey;

    const result = paramsUrlMarvel();

    expect(result).toBe(`?ts=${mockTs}&apikey=${mockPublicKey}&hash=${mockHash}`);
  });

  it('throws an error when public or private key is missing', () => {
    process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY = '';
    process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY = 'testPrivateKey';

    expect(() => paramsUrlMarvel()).toThrow('Missing API keys');

    process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY = 'testPublicKey';
    process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY = '';

    expect(() => paramsUrlMarvel()).toThrow('Missing API keys');
  });
});
