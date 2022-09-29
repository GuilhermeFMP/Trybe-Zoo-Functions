const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined) {
    return {};
  }
  const funcionario = employees.find((element) =>
    employeeName === element.firstName || employeeName === element.lastName);
  return funcionario;
}

module.exports = getEmployeeByName;
