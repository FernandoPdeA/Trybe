const fecthCurrency = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return Object.keys(data);
};

const fecthCurrencyData = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
};

module.exports = {
  fecthCurrency,
  fecthCurrencyData,
};
