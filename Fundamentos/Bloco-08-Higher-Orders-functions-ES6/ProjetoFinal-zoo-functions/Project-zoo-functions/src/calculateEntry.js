const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const menorQue18 = (array) => array.filter((item) => item.age < 18).length;
const entre18e50 = (array) => array.filter((item) => item.age >= 18 && item.age < 50).length;
const maiorOuIgualA50 = (array) => array.filter((item) => item.age >= 50).length;

function countEntrants(array) {
  const result = {};
  array.forEach((item) => {
    if (item.age < 18) {
      result.child = menorQue18(array);
    } if (item.age >= 18 && item.age < 50) {
      result.adult = entre18e50(array);
    } if (item.age >= 50) {
      result.senior = maiorOuIgualA50(array);
    }
  });
  return result;
}
console.log(countEntrants(entrants));

const priceAdult = data.prices.adult;
const priceChild = data.prices.child;
const priceSenior = data.prices.senior;

const sumValue = (array) => {
  const result = [];
  array.forEach((item) => {
    if (item.age < 18) {
      result.push(priceChild);
    } if (item.age >= 18 && item.age < 50) {
      result.push(priceAdult);
    } if (item.age >= 50) {
      result.push(priceSenior);
    }
  });
  return result.reduce((a, b) => Math.round((a + b) * 100) / 100);
};

function calculateEntry(array) {
  if (array === undefined) {
    return 0;
  } if (typeof array === 'object' && Object.keys(array).length === 0) {
    return 0;
  }
  return sumValue(array);
}

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
