let notasMaterias = {
  matematica: 8,
  fisica: 8,
  biologia: 7,
  portugues: 7,
  geografia: 3,
  computacao: 9,
  artes: 9,
  educacao_fisica: 5,
  empreendedorismo: 7,
};
let notas = 0;
let sum = 0;
let media = 0;

console.log(notasMaterias);

resultado = (notaMaterias, notas, sum, media) => {
  notas = Object.values(notaMaterias);

  for (let i = 0; i < notas.length; i++) {
    sum = sum + notas[i];
  }
  console.log(`A soma de todas as notas é : ${sum}`);

  media = sum / notas.length;

  console.log(`A média das notas é : ${media}`);

  if (media >= 7) {
    console.log(`Aprovado com média de : ${media}`);
  } else {
    console.log(`Reprovado com média : ${media}`);
  }
};

resultado(notasMaterias, notas, sum, media);
