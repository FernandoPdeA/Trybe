//Jogo do Fernando
let jogoFernando = [8, 21, 27, 5, 15, 18];

//Jogo sorteado
let megaSenaNumbers = [];

for (let i = 0; i < 6; i++) {  //Sorteia apenas 6 números 

  let randomNumber = Math.floor(Math.random() * 60) + 1; //Gera os números aleatórios...

  while (megaSenaNumbers.includes(randomNumber)) { // Verificar se o número já existe no array
    randomNumber = megaSenaNumbers[Math.floor(Math.random() * 60) + 1]; // Gera novos números até que não existam números repetidos
  }
  megaSenaNumbers.push(randomNumber); //Adicionar números ao array
}

//Contador de acertos
let acertos = 0;

function numAcertos(jogoFernando, megaSenaNumbers) {  //Função para contar os acertos

  for (let index = 0; index < megaSenaNumbers.length; index++) {  //Verifica se o número existe no jogo sorteado  
    for (let index2 = 0; index2 < jogoFernando.length; index2++) {  //Verifica se o número existe no jogo do fernando
      if (megaSenaNumbers[index] === jogoFernando[index2]) {  //Verifica se o número existe no jogo do fernando
        console.log(`O número ${megaSenaNumbers[index]} está na posição ${index2 + 1}`);  //Imprime o número e a posição
        acertos++; //Incrementa o contador de acertos
      }
    }
  } if (acertos === 0) { //Se não houver acertos
    console.log('Que pena, não acertou nenhum número :/'); //Imprime mensagem
    console.log('----------------------------------------------------');
  }
  return acertos; //Retorna o contador de acertos
}


console.log(`Jogo sorteado = ${megaSenaNumbers}`);  //Imprime o jogo sorteado

console.log('----------------------------------------------------');

console.log(`Jogo do Fernando = ${jogoFernando}`);  //Imprime o jogo do fernando

console.log('----------------------------------------------------');

console.log(`Quantidade de acertos do Fernando = ${numAcertos(megaSenaNumbers, jogoFernando)}`);  //Imprime a quantidade de acertos do fernando

