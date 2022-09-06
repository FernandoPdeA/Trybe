const { species } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

function getAnimalsOlderThan(nome, idade) {
  let result = true;
  const especies = species.filter((specie) => specie.name === nome);
  especies.map((resident) => {
    if (resident.residents) {
      const nomesResidents = resident.residents;
      nomesResidents.forEach((name) => {
        if (name.age >= idade) {
          result = true;
        } else {
          result = false;
        }
      });
    }
    return result;
  });
  return result;
}
console.log(getAnimalsOlderThan('tigers', 10));

module.exports = getAnimalsOlderThan;
