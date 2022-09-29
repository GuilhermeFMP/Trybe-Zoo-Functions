const data = require('../data/zoo_data');

const { species } = data;

const listOfAnimals = () => {
  const animais = {};
  species.forEach((element) => {
    animais[element.name] = element.residents.length;
  });
  return animais;
};

const numeroDeAnimais = (animal) => {
  const animais = species.find((tipo) => tipo.name === animal.specie).residents;
  if (animal.sex) {
    return animais.filter((specie) => specie.sex === animal.sex).length;
  }
  return animais.length;
};

function countAnimals(animal) {
  if (!animal) {
    return listOfAnimals();
  }
  return numeroDeAnimais(animal);
}

module.exports = countAnimals;
