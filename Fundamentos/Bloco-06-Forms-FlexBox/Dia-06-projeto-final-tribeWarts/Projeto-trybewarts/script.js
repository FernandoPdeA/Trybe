const botao = document.querySelector('#botao');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const enviar = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

botao.addEventListener('click', (e) => {
  e.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
});

function form1None() {
  const form1 = document.querySelector('#evaluation-form');
  form1.style.display = 'none';
}

function formDataNone() {
  const formData = document.querySelector('#form-data-none');
  formData.style.display = 'none';
}

function blockNone() {
  const html = document.querySelector('html');
  html.style.height = '100%';
  form1None();
  formDataNone();
}

function capturarDadosCheckbox() {
  const itensSelecionados = [];
  const div = document.querySelector('.aprender');
  div.getElementsByTagName('input');
  for (let loop = 0; loop < div.getElementsByTagName('input').length; loop += 1) {
    const item = div.getElementsByTagName('input')[loop];
    if (item.checked) {
      const formatados = item.value;
      itensSelecionados.push(formatados);
    }
  }
  return itensSelecionados.join(', ');
}

const submit = document.querySelector('#submit-btn');
const form2 = document.querySelector('#form-data');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  blockNone();
  const casa = document.querySelector('#house').value;
  const lastname = document.querySelector('#input-lastname').value;
  const emailDados = document.querySelector('#input-email').value;
  const nome = document.querySelector('#input-name').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const materia = capturarDadosCheckbox();
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const textarea = document.querySelector('textarea[name="validar"]').value;
  const dados = { nome, lastname, emailDados, casa, familia, materia, avaliacao, textarea };
  form2.style.display = 'block';
  const span = document.createElement('span');
  form2.appendChild(span);
  span.innerHTML = `
  Nome: ${dados.nome} ${dados.lastname}<br>Email: ${dados.emailDados}<br>Casa: ${dados.casa}<br>
  Família: ${dados.familia}<br>Matérias: ${dados.materia}<br> 
  Avaliação: ${dados.avaliacao}<br>Observações: ${dados.textarea}<br>`;
});

const textareaCount = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
textareaCount.addEventListener('keyup', () => {
  const quant = 500;
  const total = textareaCount.value.length;
  if (total <= quant) {
    const resto = quant - total;
    counter.innerHTML = resto;
  } else {
    textareaCount.value = textareaCount.value.substr(0, quant);
  }
});

const botaoMobile = document.querySelector('.material-symbols-sharp');
const formMobile = document.querySelector('.mobile');
botaoMobile.addEventListener('click', () => {
  if (formMobile.style.display === 'block') {
    formMobile.style.display = 'none';
  } else {
    formMobile.style.display = 'block';
  }
});
