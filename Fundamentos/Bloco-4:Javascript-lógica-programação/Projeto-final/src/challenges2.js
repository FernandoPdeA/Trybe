// Desafio 11
function generatePhoneNumber(numeroQualquer) {
  if (numeroQualquer.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let number of numeroQualquer) {
    if (number < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    } if (number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    let repeat = 0;

    for (let number2 of numeroQualquer) {
      if (number === number2) {
        repeat += 1;
      } if (repeat === 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  let numberString = '';

  for (let item of numeroQualquer) {
    if (numberString.length === 0) {
      numberString = `(${item}`;
    } else if (numberString.length === 3) {
      numberString = `${numberString}) ${item}`;
    } else if (numberString.length === 10) {
      numberString = `${numberString}-${item}`;
    } else {
      numberString += item;
    }
  }
  return numberString;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB <= lineC || lineA + lineC <= lineB || lineB + lineC <= lineA) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let numeros = string.match(/\d+/g);
  let soma = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    soma += parseInt(numeros[i]);
  }

  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
