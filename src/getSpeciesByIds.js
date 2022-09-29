const data = require('../data/zoo_data');

const verifySpecies = (id) => {
  const { species } = data;
  const especie = species.find((element) => id === element.id);
  return especie;
};

function getSpeciesByIds(...ids) {
  const resultados = ids.map((id) => verifySpecies(id));
  return resultados;
}

module.exports = getSpeciesByIds;
