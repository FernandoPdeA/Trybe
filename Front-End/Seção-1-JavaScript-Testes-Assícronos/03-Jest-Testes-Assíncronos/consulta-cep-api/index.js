const fetch = require('node-fetch');

const consultaCep = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Ops, algo deu errado :( ${error}`);
  }
};

consultaCep('97501-971').then((data) => {
  console.log(data);
});

module.exports = { consultaCep };