const resultadoFinal = (resultado) => {
  console.log(`O resultado final é ${resultado}`);
}

const funcSoma = (num1, num2, callback) => {
  let soma = num1 + num2;
  callback(soma);
}

funcSoma(10, 20, resultadoFinal);