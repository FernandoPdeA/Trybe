const fetch = require('node-fetch');

const adviceSlip = async () => {
  const url = 'https://api.adviceslip.com/advice';

  const result = await fetch(url)
    .then((resposta) => resposta.json())
    .then((data) => console.log(
      `Id da requisição: ${data.slip.id}, 
Mensagem recebida da API: ${data.slip.advice}
`))
    .catch((error) => `Algo deu errado :( \n${error}`);

  return result;
};

adviceSlip();