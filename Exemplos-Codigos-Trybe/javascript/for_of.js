let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let texto = "Hola mundo";
let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let numero of numeros) {
  console.log(numero);
}

console.log("\n");

for (let letra of texto) {
  console.log(letra);
}

console.log("\n");

for (let numero2 of num) {
  numero2 += 2;

  console.log(numero2);
}