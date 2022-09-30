const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const contador = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((person) => {
    if (person.age >= 50) {
      contador.senior += 1;
    } else if (person.age >= 18) {
      contador.adult += 1;
    } else {
      contador.child += 1;
    }
  });
  return contador;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0 || entrants === []) {
    return 0;
  }
  const pessoas = Object.entries(countEntrants(entrants));
  const preçoDasEntradas = pessoas
    .reduce((acc, curr, index) => acc + curr[1] * data.prices[curr[0]], 0);
  return preçoDasEntradas;
}

module.exports = { calculateEntry, countEntrants };
