import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice');

const enemy = {
  name: 'Goblin',
  defensePoints: 9,
};

it('testa uma vitória na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(10);

  const result = attackEnemy(2, 20, enemy);
  expect(result.success).toEqual(true);
});

it('testa uma derrota na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(8);

  const result = attackEnemy(2, 20, enemy);
  expect(result.success).toEqual(false);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(9);

  const result = attackEnemy(2, 20, enemy);
  expect(result.success).toEqual(false);
});
