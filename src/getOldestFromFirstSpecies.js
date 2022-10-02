const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const searchPerson = (id) => {
  const funcionario = employees.find((element) => id === element.id);
  return funcionario;
};

const returnFirstAnimal = (obj) => {
  const animal = obj.responsibleFor;
  return animal[0];
};

const returnData = (id) => {
  const dados = species.find((lista) => id === lista.id);
  return dados.residents;
};

const theOld = (array) => {
  const sorteado = array.sort((animalA, animalB) => animalB.age - animalA.age);
  return sorteado[0];
};

function getOldestFromFirstSpecies(id) {
  const funcionario = searchPerson(id);
  const animal = returnFirstAnimal(funcionario);
  const dados = returnData(animal);
  const sorteado = theOld(dados);
  return Object.values(sorteado);
}

module.exports = getOldestFromFirstSpecies;
