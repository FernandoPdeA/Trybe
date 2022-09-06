const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animaisMaisVelhos = data.employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const firstSpecies = data.species.find((specie) => specie.id === animaisMaisVelhos);
  const oldestAnimal = firstSpecies.residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(oldestAnimal);
}

console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = getOldestFromFirstSpecies;
