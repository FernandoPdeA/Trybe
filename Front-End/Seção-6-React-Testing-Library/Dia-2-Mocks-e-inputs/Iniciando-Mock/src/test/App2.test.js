/* eslint-disable no-magic-numbers */
const math2 = require('../math2');

describe('Verificando as funções que estão dentro da constante `math`', () => {
  test('verificando a função somar', () => {
    // testando a implementação original, o mock e a restauração da função original

    // implementação original
    expect(math2.somar(1, 2)).resolves.toBe(3);

    // criando o mock e substituindo a implementação para uma subtração
    const mockSomar = jest
      .spyOn(math2, 'somar')
      .mockImplementation((a, b) => a - b);

    math2.somar(5, 1);
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar(5, 1)).toBe(4);
    expect(mockSomar).toHaveBeenCalledTimes(2);
    expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

    // restaurando a implementação original
    math2.somar.mockRestore();
    expect(math2.somar(1, 2)).resolves.toBe(3);
  });
});
