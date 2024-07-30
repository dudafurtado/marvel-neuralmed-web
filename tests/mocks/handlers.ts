import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://gateway.marvel.com/v1/public/characters', () => {
    return HttpResponse.json({
      data: {
        results: [
          { id: 1, name: 'Spider-Man' },
          { id: 2, name: 'Iron Man' },
        ],
      },
    });
  }),
];
