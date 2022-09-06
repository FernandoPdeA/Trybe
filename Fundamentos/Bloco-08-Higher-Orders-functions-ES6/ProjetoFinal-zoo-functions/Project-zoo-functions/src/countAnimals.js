const data = require('../data/zoo_data');

const animaisObject = () => {
  const animais = {};
  data.species.forEach((element) => {
    animais[element.name] = element.residents.length;
  });
  return animais;
};
const animais = animaisObject();

const residentes = (animal) => {
  const numberOfAnimals = [];
  data.species.forEach((element) => {
    if (element.name === Object.values(animal).toString()) {
      numberOfAnimals.push(element.residents.length);
    }
  });
  return Number(numberOfAnimals.toString());
};

const femaleAnimals = (animal) => {
  const numberOfAnimals = [];
  data.species.forEach((element) => {
    if (element.name === animal[Object.keys(animal)[0]]) {
      element.residents.forEach((e, index) => {
        if (e.sex === 'female') {
          numberOfAnimals.push(e);
        }
      });
    }
  });
  return numberOfAnimals.length;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return animais;
  } if (Object.keys(animal).length === 1) {
    return residentes(animal);
  } if (Object.keys(animal).length === 2) {
    return femaleAnimals(animal);
  }
}

console.log(countAnimals({ specie: 'lions', sex: 'female' }));

module.exports = countAnimals;
