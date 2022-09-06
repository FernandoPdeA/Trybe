const data = require('../data/zoo_data');

const managers = data.employees.map((employee) => employee.managers);

const totalGerentes = () => {
  const total = [];
  managers.forEach((manager) => {
    manager.forEach((gerente) => {
      total.push(gerente);
    });
  });
  return total;
};

totalGerentes().filter((item, index) => {
  const result = [];
  if (totalGerentes().indexOf(item) === index) {
    result.push(item);
  }
  return result;
});

function isManager(...ids) {
  return totalGerentes().some((id) => ids.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const result = data.employees.filter((element) =>
    element.managers.some((e) =>
      e === managerId));
  const solution = result.map((nome) => `${nome.firstName} ${nome.lastName}`);
  return solution;
}
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };
