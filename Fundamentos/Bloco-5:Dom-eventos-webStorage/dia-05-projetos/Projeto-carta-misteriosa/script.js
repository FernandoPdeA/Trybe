const input = document.getElementById('carta-texto');
const btn = document.getElementById('criar-carta');
const carta = document.querySelector('#carta-gerada');
const classStyles = ['newspaper', 'magazine1', 'magazine2'];
const classSizes = ['medium', 'big', 'reallybig'];
const classRotate = ['rotateleft', 'rotateright'];
const classSkew = ['skewleft', 'skewright'];

function contador(number) {
  const cartaContador = document.getElementById('carta-contador');
  cartaContador.innerText = '';
  cartaContador.innerText = number;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomize() {
  const words = document.querySelectorAll('span');
  for (let index = 0; index < words.length; index += 1) {
    words[index].classList.add(classStyles[random(0, 2)]);
    words[index].classList.add(classSizes[random(0, 2)]);
    words[index].classList.add(classRotate[random(0, 1)]);
    words[index].classList.add(classSkew[random(0, 1)]);
  }
  contador(words.length);
}

function clickRandomize() {
  const words = document.querySelectorAll('span');
  words.forEach((element) => {
    element.addEventListener('click', (event) => {
      const alvo = event;
      alvo.target.classList = '';
      alvo.target.classList.add(classStyles[random(0, 2)]);
      alvo.target.classList.add(classSizes[random(0, 2)]);
      alvo.target.classList.add(classRotate[random(0, 1)]);
      alvo.target.classList.add(classSkew[random(0, 1)]);
    });
  });
}

function alertMessage() {
  carta.innerText = 'Por favor, digite o conteúdo da carta.';
}

function criaSpan() {
  carta.innerHTML = '';
  const separador = input.value.split(' ');
  for (let i = 0; i < separador.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = separador[i];
    carta.appendChild(span);
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value.length > 0 && input.value.indexOf('   ') < 0) {
    criaSpan();
    randomize();
    clickRandomize();
  } else {
    alertMessage();
  }
});
