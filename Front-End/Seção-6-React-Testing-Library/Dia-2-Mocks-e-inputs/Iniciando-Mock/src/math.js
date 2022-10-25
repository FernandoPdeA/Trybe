// eslint-disable-next-line no-promise-executor-return
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const dezSegundos = 10000;
const somar = async (a, b) => { await sleep(dezSegundos); return a + b; }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };

const vinte = 20;
const quarenta = 40;
console.log(somar(vinte, quarenta).then((result) => console.log(result)));
