let numero1 = 20;
let numero2 = 50;


maiorMenor = (numero1, numero2) => {
  if (numero1 > numero2) {
    console.log("O primeiro número é maior que o segundo");
  } else if (numero1 < numero2) {
    console.log("O segundo número é maior que o primeiro");
  } else {
    console.log("Os números são iguais");
  }
  return;
}

maiorMenor(numero1, numero2);