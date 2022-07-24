let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let frutas = ["Banana", "Maçã", "Abacaxi", "Abacate", "Acerola", "Abacaxi", "Abacaxi", "Abacaxi", "Abacaxi", "Abacaxi"];



function numerosFrutas(numeros, frutas) {
  for (let i in numeros) {
    console.log(`Indice = ${i}, número = ${numeros[i]}, fruta = ${frutas[i]}`);
  }
  console.log(`Esses são valores da variável numeros = ${numeros}.`)
  console.log(`Esses são valores da variável frutas = ${frutas}.`)
}

numerosFrutas(numeros, frutas);
