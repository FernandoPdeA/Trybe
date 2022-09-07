// Desaffio 1
function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(par1, par2) {
  let area = (par1 * par2) / 2;
  return area;
}

// Desafio 3
function splitSentence(palavra) {
  let palavras = palavra.split(' ');
  return palavras;
}

// Desafio 4
function concatName(names) {
  let ultimo = names[names.length - 1];
  let primeiro = names[0];
  return `${ultimo}, ${primeiro}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  let math = Math.max(...array);
  let count = 0;
  // console.log(math);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === math) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(rato, gato1, gato2) {
  let cat1 = Math.abs(rato - gato1);
  let cat2 = Math.abs(rato - gato2);

  if (cat1 < cat2) {
    return 'cat1';
  } if (cat1 > cat2) {
    return 'cat2';
  } if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
fizzBuzz = (array) => {
  let resultado = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
};

// Desafio 9
function encode(string) {
  let novaString = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] == 'a') {
      novaString += '1';
    } else if (string[i] == 'e') {
      novaString += '2';
    } else if (string[i] == 'i') {
      novaString += '3';
    } else if (string[i] == 'o') {
      novaString += '4';
    } else if (string[i] == 'u') {
      novaString += '5';
    } else {
      novaString += string[i];
    }
  }
  return novaString;
}

function decode(string) {
  let novaString = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] == '1') {
      novaString += 'a';
    } else if (string[i] == '2') {
      novaString += 'e';
    } else if (string[i] == '3') {
      novaString += 'i';
    } else if (string[i] == '4') {
      novaString += 'o';
    } else if (string[i] == '5') {
      novaString += 'u';
    } else {
      novaString += string[i];
    }
  }
  return novaString;
}

// Desafio 10
function techList(tecnologias, string) {
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  let array = [];
  for (let i = 0; i < tecnologias.length; i += 1) {
    array.push({
      name: string,
      tech: tecnologias[i],
    });
    array.sort((a, b) => a.tech.localeCompare(b.tech));
  }
  return array;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
