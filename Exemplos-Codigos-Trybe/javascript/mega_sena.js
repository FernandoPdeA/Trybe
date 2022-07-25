//Jogo sorteado
// let numeri1 = Math.floor(Math.random() * 60) + 1;
// let numeri2 = Math.floor(Math.random() * 60) + 1;
// let numeri3 = Math.floor(Math.random() * 60) + 1;
// let numeri4 = Math.floor(Math.random() * 60) + 1;
// let numeri5 = Math.floor(Math.random() * 60) + 1;
// let numeri6 = Math.floor(Math.random() * 60) + 1;
// let megaSenaNumbers = [numeri1, numeri2, numeri3, numeri4, numeri5, numeri6];

//jogadores
let jogo = [1, 2, 3, 4, 5, 6];
let jogoJoao = [2, 4, 6, 8, 9, 10];
let jogoLucas = [1, 2, 4, 6, 8, 9];
let jogoFernando = [3, 5, 7, 8, 9, 10];

//Jogo sorteado
let megaSenaNumbers = [];

for (let i = 0; i < 6; i++) {
  //Não pode ser repetido
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  while (megaSenaNumbers.includes(randomNumber)) {
    randomNumber = megaSenaNumbers[Math.floor(Math.random() * 10) + 1];
  }
  megaSenaNumbers.push(randomNumber);
}

//quantidade de numeros acertados, como o jogo sorteado
let acertos = 0;

function nacertos(jogo, megaSenaNumbers) {

  for (let index = 0; index < megaSenaNumbers.length; index++) {
    for (let index2 = 0; index2 < jogo.length; index2++) {
      if (megaSenaNumbers[index] === jogo[index2]) {
        console.log(`O número ${megaSenaNumbers[index]} está na posição ${index2 + 1}`);
        acertos++;
      }
    } if (acertos === 0) {
      console.log(`O número ${jogo[index]} não está na lista`);
    }
  }
  return acertos;
}



console.log(`Jogo sorteado = ${megaSenaNumbers}`);
console.log('----------------------------------------------------');
console.log(`Jogo do João = ${jogoJoao}`);
console.log('----------------------------------------------------');
console.log(`Jogo do Lucas = ${jogoLucas}`);
console.log('----------------------------------------------------');
console.log(`Jogo do Fernando = ${jogoFernando}`);
console.log('----------------------------------------------------');
// console.log(`Jogo padrão = ${jogo}`);
console.log('----------------------------------------------------');
console.log(`Quantidade de acertos do João = ${nacertos(megaSenaNumbers, jogoJoao)}`);
console.log('----------------------------------------------------');
console.log(`Quantidade de acertos do Lucas = ${nacertos(megaSenaNumbers, jogoLucas)}`);
console.log('----------------------------------------------------');
console.log(`Quantidade de acertos do Fernando = ${nacertos(megaSenaNumbers, jogoFernando)}`);

//Quantidade de acerttos