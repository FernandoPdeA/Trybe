import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testa o componente App.js', () => {
  it('testa se retorna um personagem', async () => {
    const characterList = [
      {
        id: 1,
        name: 'Chapolin Colorado',
        source: 'Chaves',
        defensePoints: 10,
      },
    ];
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(characterList),
    });

    render(<App />);
    const character = await screen.findByRole('heading', { name: /chapolin colorado/i });
    expect(character).toBeInTheDocument();
  });
});
