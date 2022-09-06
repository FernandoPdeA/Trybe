const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  let result = [];
  if (name === undefined) {
    return {};
  }
  data.employees.map((func, index, array) => {
    if (name === func.firstName || name === func.lastName) {
      result = func;
    }
    return result;
  });
  return result;
}
getEmployeeByName('Emery');

module.exports = getEmployeeByName;
