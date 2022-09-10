const { it, test, expect, describe } = require('@jest/globals');
const { consultaCep } = require('./index');

describe('Testando as funções e resultados da api de CEP', () => {
  test('Verifica se retorna um objeto', async () => {
    expect.assertions(1);
    const data = await consultaCep('97501-971');
    expect(typeof data).toBe('object');
  });

  test('Verifica se retorna o logradouro', async () => {
    expect.assertions(1);
    const result = await consultaCep('97501-971');
    expect(result.logradouro).toBe('Rua General João Manoel');
  });

  test('Verifica se ao receber tal cep, o retorno seria as informações corretas.', async () => {
    expect.assertions(1);
    const object = {
      cep: '97501-971',
      logradouro: 'Rua General João Manoel',
      complemento: '3211',
      bairro: 'Centro',
      localidade: 'Uruguaiana',
      uf: 'RS',
      ibge: '4322400',
      gia: '',
      ddd: '55',
      siafi: '8951'
    };
    try {
      const cep = '97501-971';
      const result = await consultaCep(cep);
      expect(result).toEqual(object);
    } catch (error) {
      throw new Error('Ops, algo deu errado :(', error);
    }
  });

  test('Verifica se ao receber um cep com o formato inválido, dará um erro.', async () => {
    expect.assertions(1);
    try {
      const cep = '97501/971';
      await consultaCep(cep);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

