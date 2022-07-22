let frutas = [3, 4, 1, 1, 1];



function soma(frutas) {
  let total = 0;

  for (let i = 0; i < frutas.length; i++) {
    total += frutas[i];
  }
  return total;
}

if (soma(frutas) < 15) {
  console.log(`A soma das frutas é ${soma(frutas)}, portanto é menor que 15`);
} else if (soma(frutas) >= 15) {
  console.log(`A soma das frutas é ${soma(frutas)}, portanto é maior que 15`);
}

soma(frutas);
console.log(soma(frutas));
