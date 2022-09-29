const data = require('../data/zoo_data');

const verify = (obj, age) => {
  const { residents } = obj;
  const result = residents.every((element) => age <= element.age);
  return result;
};

const searchSpecies = (name) => {
  const { species } = data;
  const especie = species.find((element) => name === element.name);
  return especie;
};

function getAnimalsOlderThan(animal, age) {
  const specie = searchSpecies(animal);
  const result = verify(specie, age);
  return result;
}

module.exports = getAnimalsOlderThan;
