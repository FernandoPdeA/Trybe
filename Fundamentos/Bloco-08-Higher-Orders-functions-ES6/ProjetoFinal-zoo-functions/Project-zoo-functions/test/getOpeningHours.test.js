const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const hours = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  it('Se não for passado nenhum argumento', () => {
    expect(getOpeningHours()).toEqual(hours);
  });

  it('Se for passado `Tuesday`, `8:00AM`', () => {
    expect(getOpeningHours('Tuesday', '12:00-PM')).toEqual('The zoo is open');
  });

  it('Se for passado o dia Monday e uma hora qualquer, ele estará fechado', () => {
    expect(getOpeningHours('Monday', '12:00-PM')).toEqual('The zoo is closed');
  });

  it('Se for passado um dia inválido ex:`tuesday`', () => {
    expect(() => getOpeningHours('tuesdai', '12:00-PM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Se for passado uma hora com o formato incorreto, exemplo:`12:99-PM`', () => {
    expect(() => getOpeningHours('Tuesday', '12:99-PM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Se for passado uma hora com o formato incorreto, exemplo:`12-00-PM, traço ao invés dos dois pontos`', () => {
    expect(() => getOpeningHours('Tuesday', '12-00-PM')).toThrow('The minutes should represent a number');
  });

  it('Se for passado uma hora com o formato incorreto, exemplo:`12/00/PM, barras ao invés dos dois pontos e traço`', () => {
    expect(() => getOpeningHours('Tuesday', '12/00/PM')).toThrow('The hour should represent a number');
  });

  it('Se for passado um valor com o formato incorreto, exemplo:`12:00-AMM, dois MM ao invés de um M apenas`', () => {
    expect(() => getOpeningHours('Tuesday', '12:00-AMM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Checar se getOpenHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Checar se getOpenHour retorna um objeto', () => {
    expect(typeof getOpeningHours()).toBe('object');
  });

  it('Checar se foi inserido um número maior que 12 na hora, exemplo: `20:00-AM`', () => {
    expect(() => getOpeningHours('Tuesday', '20:00-AM')).toThrow('The hour must be between 0 and 12');
  });
});
