//Jogo sorteado
// let numeri1 = Math.floor(Math.random() * 60) + 1;
// let numeri2 = Math.floor(Math.random() * 60) + 1;
// let numeri3 = Math.floor(Math.random() * 60) + 1;
// let numeri4 = Math.floor(Math.random() * 60) + 1;
// let numeri5 = Math.floor(Math.random() * 60) + 1;
// let numeri6 = Math.floor(Math.random() * 60) + 1;
// let megaSenaNumbers = [numeri1, numeri2, numeri3, numeri4, numeri5, numeri6];

//meu jogo
let studentGame = [2, 15, 22, 44, 51, 60];

//Jogo sorteado
let megaSenaNumbers = [];

for (let i = 0; i < 10; i++) {
  //Não pode ser repetido
  let randomNumber = Math.floor(Math.random() * 60) + 1;

  if (!megaSenaNumbers.includes(randomNumber)) {
    megaSenaNumbers.push(randomNumber);
  } else {
    i++;
  }
}

//quantidade de numeros acertados, como o jogo sorteado
let acertos = 0;

for (let index = 0; index < megaSenaNumbers.length; index++) {
  for (let index2 = 0; index2 < studentGame.length; index2++) {
    if (megaSenaNumbers[index] === studentGame[index2]) {
      console.log(`O número ${megaSenaNumbers[index]} está na posição ${index2 + 1}`);
      acertos++;
    }
  } if (acertos === 0) {
    console.log(`O número ${studentGame[index]} não está na lista`);
  }
}


console.log(`Jogo sorteado = ${megaSenaNumbers}`);
console.log(`Jogo do aluno = ${studentGame}`);
console.log(`Quantidade de acertos = ${acertos}`);


//Quantidade de acerttos