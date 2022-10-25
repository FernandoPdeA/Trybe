import rollDice from '../service/rollDice';

describe('Testa a função rollDice', () => {
  it('testa a função `rollDice` esta retornando o resultado esperado', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.8);
    expect(rollDice()).toBe(16);
  });

  it('testa se a função foi chamada uma única vez', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.8);
    rollDice();
    expect(global.Math.random).toBeCalledTimes(1);
  });
});
