let statusCarro = "desligado";
let aceleracao = 0;
let rotacaoVolante = 0;

ligarDesligar = () => {

  if (statusCarro == "ligado") {
    statusCarro = "desligado";
  } else if (statusCarro == "desligado") {
    statusCarro = "ligado";
  }
  return `O carro foi = ${statusCarro}`;
};

acelerar = (incremento) => {
  aceleracao = aceleracao + incremento;
  return `Acelerando a = ${aceleracao} km/h`;
};

frear = (decremento) => {
  aceleracao = aceleracao - decremento;
  return `O carro foi freado e agora esta a  = ${aceleracao} km/h`;
};

girarVolante = (anguloRotacao) => {
  rotacaoVolante = rotacaoVolante + anguloRotacao;
  return `Girando o volante a = ${rotacaoVolante} graus`;
};