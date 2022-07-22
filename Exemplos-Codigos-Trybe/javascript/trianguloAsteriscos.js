//Triângulo de asteriscos com base no número de linhas

let n = 10;
let asterisco = '*';

for (i = 0; i < n; i++) {
  console.log(asterisco.repeat(i + 1));
}