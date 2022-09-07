const messageDelay = () => Math.floor(Math.random() * 5000);
const message = 'A temperatura de Marte é de:';

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  setTimeout(() => {
    console.log(`${message} ${getMarsTemperature()} graus Celsius!`);
  }, messageDelay());
};

sendMarsTemperature();


