let timeA = 1000;
let timeB = 500;
let numA = 4;
let numB = 6;
let numC = 2;

const sum = (a, b) => a + b;
setTimeout(() => {
  numC = sum(numA, numB);
  console.log(numC);
}, timeA);
console.log(numC);
setTimeout(() => {
  console.log(sum(numA, numC) === numB);
}, timeB);

console.log('----------------------------------');

const elogio = () => console.log("Neymar é 10, a Trybe é 100");
setTimeout(elogio, 10000);

console.log('----------------------------------');

const numeroAleatorio = () => Math.floor(Math.random() * 100 + 1);
setTimeout(() => console.log(numeroAleatorio()), 3000);