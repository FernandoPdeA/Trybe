// despesas.js

const minhasDespesas = [
  {
    academia: 99,
  },
  {
    ifood: 200,
  },
  {
    celular: 60,
  },
  {
    internet: 100,
  },
];

const minhaRenda = 1000;

const despesaMensal = (renda, despesas, callbak) => {
  const despesaTotal = callbak(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês: 
  Recebido: R$ ${renda}, 00
  Gasto: R$ ${despesaTotal}, 00
  Saldo: R$ ${saldoFinal}, 00`);
};

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => {
    const soma = acc + curr[0];
    return soma;
  }, 0);
  return despesaTotal;
};
despesaMensal(minhaRenda, minhasDespesas, somaDespesas);