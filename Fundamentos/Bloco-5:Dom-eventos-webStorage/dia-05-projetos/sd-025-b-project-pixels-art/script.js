gerarCores = () => {
  const colorInicial = document.getElementsByClassName('color')[0];
  colorInicial.className = 'color selected';
  colorInicial.style.backgroundColor = 'rgb(0, 0, 0)';

  rgb1 = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // console.log(cor1);
    return `rgb(${r}, ${g}, ${b})`;
  };

  rgb2 = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // console.log(cor2);
    return `rgb(${r}, ${g}, ${b})`;
  };

  rgb3 = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // console.log(cor3);
    return `rgb(${r}, ${g}, ${b})`;
  };

  if (document.getElementsByClassName('color')[1]) {
    document.getElementsByClassName('color')[1].style.backgroundColor = rgb1();
    document.getElementsByClassName('color')[2].style.backgroundColor = rgb2();
    document.getElementsByClassName('color')[3].style.backgroundColor = rgb3();
  }
};
gerarCores();

window.onload = () => {
  let colorInicial = document.getElementsByClassName('color')[0];
  colorInicial.className = 'color selected';

  const color = document.getElementsByClassName('color');
  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', () => {
      colorInicial.className = 'color';
      colorInicial = color[i];
      colorInicial.className = 'color selected';
    });
  }

  const pixelColor = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].addEventListener('click', () => {
      pixelColor[i].style.backgroundColor = colorInicial.style.backgroundColor;
    });
  }

  const clearColor = document.getElementById('clear-board');
  const pixelClass = document.getElementsByClassName('pixel');
  clearColor.addEventListener('click', () => {
    for (let i = 0; i < pixelClass.length; i += 1) {
      pixelClass[i].style.backgroundColor = 'white';
    }
  });

  const inputNumber = document.getElementById('board-size');

  alertMessage = () => {
    if (inputNumber.value === '') {
      alert('Board inválido!');
    }
  };

  limiteNumber = () => {
    if (inputNumber.value < 5) {
      inputNumber.value = 5;
    } else if (inputNumber.value > 50) {
      inputNumber.value = 50;
    }
  };

  createPixels = () => {
    const number = inputNumber.value;
    const board = document.getElementById('pixel-board');
    board.innerHTML = '';
    for (let i = 0; i < number; i += 1) {
      const row = document.createElement('div');
      row.className = 'pixel-board';
      for (let j = 0; j < number; j += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        row.appendChild(pixel);
      }
      board.appendChild(row);
    }

    const color = document.getElementsByClassName('color');
    for (let i = 0; i < color.length; i += 1) {
      color[i].addEventListener('click', () => {
        colorInicial.className = 'color';
        colorInicial = color[i];
        colorInicial.className = 'color selected';
      });
    }

    const pixelColor = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixelColor.length; i += 1) {
      pixelColor[i].addEventListener('click', () => {
        pixelColor[i].style.backgroundColor = colorInicial.style.backgroundColor;
      });
    }

    const clearColor = document.getElementById('clear-board');
    const pixelClass = document.getElementsByClassName('pixel');
    clearColor.addEventListener('click', () => {
      for (let i = 0; i < pixelClass.length; i += 1) {
        pixelClass[i].style.backgroundColor = 'white';
      }
    });
  };

  const buttonVqn = document.getElementById('generate-board');
  buttonVqn.addEventListener('click', () => {
    alertMessage();
    limiteNumber();
    createPixels();
  });
};
