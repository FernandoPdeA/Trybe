const circulos = document.querySelectorAll('.ball');
const pRgbColor = document.querySelector('#rgb-color');
const pScore = document.querySelector('#score');
const pAnswer = document.querySelector('#answer');
const resetGamer = document.querySelector('#reset-game');

function cores() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

window.addEventListener('load', () => {
  circulos.forEach((circulo) => {
    circulo.style.backgroundColor = cores();
    pRgbColor.textContent = circulo.style.backgroundColor;
    // eslint-disable-next-line no-unused-expressions
    localStorage.getItem('score') ? pScore.textContent = localStorage.getItem('score') : pScore.textContent = 0;
  });
  return circulos;
});

circulos.forEach((circulo) => {
  circulo.addEventListener('click', () => {
    const color = circulo.style.backgroundColor;

    if (color === pRgbColor.textContent) {
      pScore.textContent = Number(pScore.textContent) + 3;
      localStorage.setItem('score', pScore.textContent);
      pAnswer.textContent = 'Acertou!';
      circulos.forEach((circulo) => {
        circulo.style.backgroundColor = cores();
        pRgbColor.textContent = circulo.style.backgroundColor;
      });
    } else {
      pAnswer.textContent = 'Errou! Tente novamente!';
      pScore.textContent = Number(pScore.textContent) - 3;
      circulo.style.backgroundColor = '#000';
    }
    alert(`Cor da bola selecionada = ${color}`);
  });
});

// ao clicar no botão resetar o jogo, o jogo deve reiniciar, mas a pontuação deve permanecer.
resetGamer.addEventListener('click', () => {
  window.location.reload();
});
