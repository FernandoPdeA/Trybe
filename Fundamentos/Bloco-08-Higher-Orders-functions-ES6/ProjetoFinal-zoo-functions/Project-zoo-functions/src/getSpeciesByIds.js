const data = require('../data/zoo_data');

const especie = data.species;

function getSpeciesByIds(...args) {
  if (args) {
    const val = args.map((id) => especie.filter((element) => element.id === id));
    return val.map((element) => element[0]);
  }
  return [];
}

// console.log(getSpeciesByIds());
// console.log(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'))
module.exports = getSpeciesByIds;
