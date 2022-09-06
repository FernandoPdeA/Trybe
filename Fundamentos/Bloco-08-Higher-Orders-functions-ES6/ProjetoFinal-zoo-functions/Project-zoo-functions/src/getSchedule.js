const data = require('../data/zoo_data');

const animalsExhibition = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: {
    exhibition: 'The zoo will be closed!',
    officeHour: 'CLOSED',
  },
};

const segundaFeira = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const dias = ['Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday',
];

const dayParameter = (scheduleTarget) => {
  let days;
  for (let index = 0; index < dias.length; index += 1) {
    if (scheduleTarget === dias[index]) {
      days = { [scheduleTarget]: animalsExhibition[scheduleTarget] };
    }
  }
  return days;
};

const speciesMap = (scheduleTarget) => {
  let diasSemana;
  data.species.map((specie) => {
    if (specie.name === scheduleTarget) {
      diasSemana = specie.availability;
    }
    return diasSemana;
  });

  return diasSemana;
};

const complexidade = (scheduleTarget) => {
  let result;
  if (speciesMap(scheduleTarget) !== undefined) {
    result = speciesMap(scheduleTarget);
  } if (result === undefined || scheduleTarget === undefined) {
    result = animalsExhibition;
  }
  return result;
};

function getSchedule(scheduleTarget) {
  let result;
  if (scheduleTarget === 'Monday') {
    result = segundaFeira;
  } if (dias.includes(scheduleTarget)) {
    result = dayParameter(scheduleTarget);
  } else {
    result = complexidade(scheduleTarget);
  }
  return result;
}
console.log(getSchedule('Friday'));

module.exports = getSchedule;
