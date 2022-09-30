const data = require('../data/zoo_data');

const { species } = data;

const visitationDays = (target) => {
  const animal = species.find((element) => element.name === target);
  const days = animal.availability;
  return days;
};

const expectDay = (target) => {
  const dias = { [target]: {} };
  if (target === 'Monday') {
    dias[target].officeHour = 'CLOSED';
    dias[target].exhibition = 'The zoo will be closed!';
  } else {
    dias[target]
      .officeHour = `Open from ${data.hours[target].open}am until ${data.hours[target].close}pm`;
    const exib = [];
    species.forEach((animal) => {
      if (target === animal.availability.find((dia) => dia === target)) {
        exib.push(animal.name);
      }
    });
    dias[target].exhibition = exib;
  }
  return dias;
};

const semParametro = () => {
  const dias = Object.keys(data.hours);
  const tabelinha = {};
  dias.forEach((dia) => {
    const daysWeek = expectDay(dia);
    tabelinha[dia] = daysWeek[dia];
  });
  return tabelinha;
};

const isAnimal = (animal) => {
  const animais = species.map((a) => a.name);
  return animais.includes(animal);
};

const isDay = (day) => {
  const dias = Object.keys(data.hours);
  return dias.includes(day);
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return semParametro();
  }
  if (isAnimal(scheduleTarget)) {
    return visitationDays(scheduleTarget);
  }
  if (isDay(scheduleTarget)) {
    return expectDay(scheduleTarget);
  }
  return semParametro();
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
