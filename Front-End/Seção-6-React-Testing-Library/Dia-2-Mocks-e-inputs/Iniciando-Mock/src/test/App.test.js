const math = require('../math');
jest.mock("../math");

function retornaNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

function divisivelPorDois() {
  return (retornaNumeroAleatorio() % 2 === 0);
}

function somaDoisNumeros() {
  return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}

describe('Aprendendo sobre mocks, aplicando tests na função somaDoisNumeros', () => {
  test('Verificando se a função somaDoisNumeros foi chamada', () => {
    const mockRetornaNumeroAleatorio = jest.fn();
    mockRetornaNumeroAleatorio();
    expect(mockRetornaNumeroAleatorio).toHaveBeenCalled();
  });

  test('Verificando o resultado da função somaDoisNúmeros', () => {
    const mockSomaDoisNumeros = jest.fn().mockReturnValue(8);
    mockSomaDoisNumeros();
    expect(mockSomaDoisNumeros()).toBe(8);
  });

  test('Verifica quantas vezes a função somaDoisNumeros foi chamada', () => {
    const somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    somaDoisNumeros();
    somaDoisNumeros();
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalledTimes(4);
  });

  test('Verificando se retorna true quando o número é par', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(4);
    expect(divisivelPorDois()).toBe(true);
  });

  test('Verificando se retorna false quando o número é ímpar', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(3);
    expect(divisivelPorDois()).toBe(false);
  });
});


describe('Verificando as funções que estão dentro da constante `math`', () => {
  test("Verificando a função somar", () => {
    /* Aqui testamos se a função foi chamada, 
    quantas vezes foi chamada, 
    quais parâmetros foram usados e qual seu retorno*/

    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);
    math.somar(3, 4);
    math.somar(5, 6);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(3);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(3, 2)).toBe(5);
  });

  test('Testando a função subtrair', () => {
    /* Aqui testamos se a função foi chamada,
    quantas vezes foi chamada, 
    quais parâmetros foram usados e qual seu retorno*/

    math.subtrair.mockImplementation((a, b) => a - b);
    math.subtrair(1, 2);
    math.subtrair(3, 4);
    math.subtrair(5, 6);

    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(3);
    expect(math.subtrair).toHaveBeenCalledWith(1, 2);
    expect(math.subtrair(2, 3)).toBe(-1);
  });

  test('Testando a função multiplicar', () => {
    /* Aqui testamos se a função foi chamada,
    quantas vezes foi chamada, 
    quais parâmetros foram usados e qual seu retorno*/

    math.multiplicar.mockImplementation((a, b) => a * b);
    math.multiplicar(1, 2);
    math.multiplicar(3, 4);
    math.multiplicar(5, 6);

    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(3);
    expect(math.multiplicar).toHaveBeenCalledWith(1, 2);
    expect(math.multiplicar(2, 3)).toBe(6);
  });

  test('Testando a função dividir', () => {
    /* Aqui testamos se a função foi chamada,
    quantas vezes foi chamada, 
    quais parâmetros foram usados e qual seu retorno*/

    math.dividir.mockImplementation((a, b) => a / b);
    math.dividir(1, 2);
    math.dividir(3, 4);
    math.dividir(5, 6);

    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(3);
    expect(math.dividir).toHaveBeenCalledWith(1, 2);
    expect(math.dividir(2, 3)).toBe(0.6666666666666666);
  });
});


