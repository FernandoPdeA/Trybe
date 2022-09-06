const data = require('../data/zoo_data');

function supportAnimalMap(specie, sorted, sex) {
  const resid = specie.residents
    .filter((el) => el.sex === sex || sex === 'sexAlls')
    .map((el) => el.name);
  if (sorted === true) { resid.sort(); }
  const structure = {};
  structure[specie.name] = resid;
  return structure;
}

const animalsNE = data.species.filter((animal) => animal.location === 'NE');
const animalsNW = data.species.filter((animal) => animal.location === 'NW');
const animalsSE = data.species.filter((animal) => animal.location === 'SE');
const animalsSW = data.species.filter((animal) => animal.location === 'SW');

const noParams = {
  NE: animalsNE.map((animal) => animal.name),
  NW: animalsNW.map((animal) => animal.name),
  SE: animalsSE.map((animal) => animal.name),
  SW: animalsSW.map((animal) => animal.name),
};

function getAnimalMap(options = {}) {
  if (options.includeNames === undefined) return noParams;
  const { includeNames = false, sorted = false, sex = 'sexAlls' } = options;
  const locationAnimals = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((el) => {
    locationAnimals[el.location]
      .push((includeNames) ? supportAnimalMap(el, sorted, sex) : el.name);
  });
  return locationAnimals;
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
