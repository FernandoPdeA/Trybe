const API_URL = 'https://api.coincap.io/v2/assets';
const ul = document.querySelector('#coins-list');

const fetchCoins = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const result = await data.data;
    return result;
  } catch (error) {
    console.error(`Ops, algo de errado não esta certo: ${error}`);
  }
};

const renderCoins = async () => {
  const coins = await fetchCoins();
  const firstCoins = coins.slice(0, 10);

  firstCoins.forEach((coin) => {
    const twoDecimal = coin.priceUsd.slice(0, 8);
    const li = document.createElement('li');
    li.innerHTML = `${coin.name} (${coin.symbol}): ${twoDecimal}`;
    ul.appendChild(li);
  });
};

const moedas = 'USD-BRL,EUR-BRL,BTC-BRL,USDT-BR';
const API_URL_REAL = `https://economia.awesomeapi.com.br/all/${moedas}`;
const ul2 = document.querySelector('#coins-list2');

const fetchReal = async () => {
  try {
    const response = await fetch(API_URL_REAL);
    const data = await response.json();
    const result = await data;
    return result;
  } catch (error) {
    console.error(`Ops, algo de errado não esta certo: ${error}`);
  }
};

const renderCoins2 = async () => {
  const coins2 = await fetchReal();
  const li = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  li.innerHTML = `${coins2.BTC.name} (${coins2.BTC.code}): ${coins2.BTC.bid}`;
  li2.innerHTML = `${coins2.USD.name} (${coins2.USD.code}): ${coins2.USD.bid}`;
  li3.innerHTML = `${coins2.EUR.name} (${coins2.EUR.code}): ${coins2.EUR.bid}`;
  li4.innerHTML = `${coins2.USDT.name} (${coins2.USDT.code}): ${coins2.USDT.bid}`;
  ul2.appendChild(li);
  ul2.appendChild(li2);
  ul2.appendChild(li3);
  ul2.appendChild(li4);
};

window.onload = async () => {
  await renderCoins();
  await renderCoins2();
};
