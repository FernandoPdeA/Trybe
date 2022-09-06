const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Deve retornar o número de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Deve retornar o nome dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Deve retornar a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Deve retornar a localidade dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Deve retornar a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Deve retornar a disponibilidade dos elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Deve retornar undefined caso não seja passado parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Se for passado um parâmetro diferente dos necessários, deve retornar `null`', () => {
    expect(handlerElephants('qualquerCoisa')).toBe(null);
  });

  it('Se for passado um parâmetro que não seja uma string, deve retornar uma mensagem de erro', () => {
    expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
