let botao = document.querySelector('input[type="submit"]');
let soma = document.querySelector('.soma');
let subtrai = document.querySelector('.subtrai');
let multiplica = document.querySelector('.multiplica');
let divide = document.querySelector('.divide');
let reset = document.querySelector('.reset');

let escolha = '';

soma.addEventListener('click', function () {
  escolha = "+";
  soma.style.backgroundColor = '#00ff00';
});
subtrai.addEventListener('click', function () {
  escolha = "-";
  subtrai.style.backgroundColor = '#00ff00';
});
multiplica.addEventListener('click', function () {
  escolha = "x";
  multiplica.style.backgroundColor = '#00ff00';
});
divide.addEventListener('click', function () {
  escolha = "/";
  divide.style.backgroundColor = '#00ff00';
});



botao.addEventListener('click', function (event) {
  event.preventDefault()

  let num1 = document.querySelector('input[name="num1"]').value;
  let num2 = document.querySelector('input[name="num2"]').value;
  // let resultado = 0;

  if (escolha == "+") {
    let resultado = parseInt(num1) + parseInt(num2);
    let resultado2 = document.querySelector('tbody');
    resultado2.innerHTML = `<tr>${resultado}</tr>`;
  } else if (escolha == '-') {
    let resultado = parseInt(num1) - parseInt(num2);
    let resultado2 = document.querySelector('tbody');
    resultado2.innerHTML = `<tr>${resultado}</tr>`;
  } else if (escolha == 'x') {
    let resultado = parseInt(num1) * parseInt(num2);
    let resultado2 = document.querySelector('tbody');
    resultado2.innerHTML = `<tr>${resultado}</tr>`;
  } else if (escolha == '/') {
    let resultado = parseInt(num1) / parseInt(num2);
    let resultado2 = document.querySelector('tbody');
    resultado2.innerHTML = `<tr>${resultado}</tr>`;
  }


  document.querySelector('input[name="num1"]').value = '';
  document.querySelector('input[name="num2"]').value = '';

  reset.addEventListener('click', function () {
    document.querySelector('tbody').innerHTML = '';
    soma.style.backgroundColor = '#ffffff';
    subtrai.style.backgroundColor = '#ffffff';
    multiplica.style.backgroundColor = '#ffffff';
    divide.style.backgroundColor = '#ffffff';


    window.location.reload();
  }
  );

});