const loadingElement = document.querySelector('.carregando');

// const sleep = (sleepDuration) => {
//   const now = new Date().getTime();
//   while (new Date().getTime() < now + sleepDuration);
// };

// Callbacks
// Then e Catch
// Async/await
// Promises

const prepararBigMac = (callback) => {
  setTimeout(() => {
    // outras instruções
    console.log('1 - Big Mac');
    callback();
  }, Math.random() * 2000);
};

const prepararMilkShake = () => {
  setTimeout(() => {
    //outras informacoes
    console.log('2 - Milk Shake');
    // outras intruçoes
    console.log("FIM");
    loadingElement.innerHTML = "";
  }, Math.random() * 2000);
};

function fazerNovoPedido() {
  console.log("INÍCIO");

  loadingElement.innerHTML = "Estamos preparando o seu pedido...";
  
  prepararBigMac(prepararMilkShake);
  // prepararMilkShake();

  console.log("outras ações");
}

// let frutas = ['maca', 'banana']

// setTimeout()
