const data = require('../data/zoo_data');

const gerentes = {
  stephanieId: '9e7d4524-363c-416a-8759-8aa7e50c0992',
  olaId: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  burlId: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
};

function isManager(id) {
  if (id === gerentes.stephanieId || id === gerentes.olaId || id === gerentes.burlId) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  const validation = isManager(managerId);
  const empregados = [];
  if (validation !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  employees.forEach((empregado) => {
    const lolo = empregado.managers.some((gerente) => gerente === managerId);
    if (lolo === true) {
      empregados.push(`${empregado.firstName} ${empregado.lastName}`);
    }
  });
  return empregados;
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
