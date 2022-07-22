//triângulo de asteriscos com base no número de linhas, mas invertido, começando pelo primeiro

let n = 10;
let asterisco = '*';

for (i = 0; i < n; i++) {
  console.log(asterisco.repeat(n - i));
}