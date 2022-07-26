const n = 5;
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultado = 0;
let resultado2 = 0;


for (let i = 0; i <= n; i += 1) {
  resultado = resultado + i;
  // console.log(resultado);
};

for (let i = 0; i < numeros.length; i++) {
  resultado2 += numeros[i];
  // console.log(resultado2);
}

console.log('-----------------------------');
console.log(resultado)
console.log('-----------------------------');
console.log(resultado2)