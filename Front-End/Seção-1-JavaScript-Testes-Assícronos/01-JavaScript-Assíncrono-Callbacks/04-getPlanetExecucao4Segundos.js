const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  console.log('Planet: ',
    mars.name, mars.distanceFromSun.value,
    mars.distanceFromSun.measurementUnit, 'from the sun');
};

const timeout = 4000;

setTimeout(() => {
  getPlanet(); // Imprime Marte depois de 4 segundos
}, timeout);
