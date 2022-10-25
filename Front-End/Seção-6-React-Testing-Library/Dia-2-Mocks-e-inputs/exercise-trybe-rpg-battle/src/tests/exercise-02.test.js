import rollDice from '../service/rollDice';
import rollMultipleDice from '../service/rollMultipleDice';

jest.mock('../service/rollDice');

describe('Testa a função rollMultipleDice', () => {
  it('testa a função `rollMultipleDice` retorna o valor correto', () => {
    rollDice.mockReturnValueOnce(6);
    rollDice.mockReturnValueOnce(4);
    expect(rollMultipleDice(2, 20)).toBe(10);
  });

  it('teste quantas vezes rolDice foi chamada', () => {
    rollDice.mockReturnValueOnce(6);
    rollDice.mockReturnValueOnce(4);
    rollMultipleDice(2, 20);
    expect(rollDice).toHaveBeenCalledTimes(2);
  });
});
