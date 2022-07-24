let statusCarro = "ligado";
let statusCarro2 = "movimento";
let curva = "esquerda";

console.log(`O carro está = ${statusCarro}`);

ligarOuDesligar = (statusCarro) => {
  let situacao = "";

  if (statusCarro == "ligado") {
    situacao = "desligado";
  } else if (statusCarro == "desligado") {
    situacao = "ligado";
  }
  console.log(`Portanto agora será = ${situacao}!`);
}
ligarOuDesligar(statusCarro);

console.log('---------------------//---------------------');

console.log(`O carro está = ${statusCarro2}`);
let situacao = "";

acelerarOuFrear = (statusCarro2) => {
  if (statusCarro2 == "parado") {
    situacao = "acelerar";
  } else if (statusCarro2 == "movimento") {
    situacao = "frear";
  }
  console.log(`Portanto agora você terá que = ${situacao}!`);
};
acelerarOuFrear(statusCarro2);

console.log('---------------------//---------------------');

console.log(`A curva é para a = ${curva}`);

viraOVolante = (curva) => {
  let volante = "";

  if (curva == "direita") {
    volante = curva;
  } else if (curva == "esquerda") {
    volante = curva;
  }
  console.log(`Portanto agora você terá que virar o volante para a = ${volante}!`);
};
viraOVolante(curva);