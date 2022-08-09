const buttonCreate = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');

buttonCreate.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const tarefa = input.value;

  const item = document.createElement('li');
  item.innerHTML = tarefa;
  item.setAttribute('class', 'tarefa');

  lista.appendChild(item);
  input.value = '';
});

const listaGray = lista;
listaGray.addEventListener('click', (event) => {
  const item = event.target;
  for (let i = 0; i < listaGray.children.length; i += 1) {
    listaGray.children[i].style.background = 'none';
    listaGray.children[i].style.color = '#000';
  }
  item.style.background = 'gray';
  item.style.color = 'white';
});

const listaScratch = lista;
listaScratch.addEventListener('dblclick', (event) => {
  const tarefa = event.target;
  for (let i = 0; i < listaScratch.children.length; i += 1) {
    // listaScratch.children[i].setAttribute('class', 'tarefa');
  } if (tarefa.classList.contains('completed')) {
    tarefa.classList.remove('completed');
  } else {
    tarefa.setAttribute('class', 'tarefa completed');
  }
});

const buttonRemove = document.querySelector('#apaga-tudo');
buttonRemove.addEventListener('click', () => {
  const listaRemove = document.querySelector('#lista-tarefas');
  listaRemove.innerHTML = '';
});

const buttonRemoveCompleted = document.querySelector('#remover-finalizados');
buttonRemoveCompleted.addEventListener('click', () => {
  const completados = document.querySelectorAll('.completed');
  for (let i = 0; i < completados.length; i += 1) {
    completados[i].remove();
  }
});

const buttonSave = document.querySelector('#salvar-tarefas');
buttonSave.addEventListener('click', () => {
  const listaSave = document.querySelector('#lista-tarefas');
  const tarefas = listaSave.children;
  // atribuir uma classe selected ao salvar
  const tarefasSalvas = [];
  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = {
      texto: tarefas[i].innerHTML,
      class: tarefas[i].className,
      atributos: tarefas[i].attributes,
    };
    tarefasSalvas.push(tarefa);
  }
  localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
});

window.addEventListener('load', () => {
  const tarefas = JSON.parse(localStorage.getItem('tarefas'));
  if (tarefas) {
    for (let i = 0; i < tarefas.length; i += 1) {
      const item = document.createElement('li');
      item.innerHTML = tarefas[i].texto;
      item.setAttribute('class', tarefas[i].class);
      for (let j = 0; j < tarefas[i].atributos.length; j += 1) {
        item.setAttribute(tarefas[i].atributos[j].name, tarefas[i].atributos[j].value);
      }
      const listaSave = lista;
      listaSave.appendChild(item);
    }
  }
});

const buttomMoveUp = document.querySelector('#mover-cima');
buttomMoveUp.addEventListener('click', () => {
  const completados = document.querySelectorAll('.completed');
  for (let i = 0; i < completados.length; i += 1) {
    const tarefa = completados[i];
    if (tarefa.previousElementSibling) {
      lista.insertBefore(tarefa, tarefa.previousElementSibling);
    }
  }
});

const buttomMoveDown = document.querySelector('#mover-baixo');
buttomMoveDown.addEventListener('click', () => {
  const completados = document.querySelectorAll('.completed');
  for (let i = completados.length - 1; i >= 0; i -= 1) {
    const tarefa = completados[i];
    if (tarefa.nextElementSibling) {
      lista.insertBefore(tarefa, tarefa.nextElementSibling.nextElementSibling);
    }
  }
});

const buttomRemoveSelected = document.querySelector('#remover-selecionado');
buttomRemoveSelected.addEventListener('click', () => {
  const completados = document.querySelectorAll('.completed');
  for (let i = 0; i < completados.length; i += 1) {
    completados[i].remove();
  }
  localStorage.removeItem('tarefas');
  const listaSave = document.querySelector('#lista-tarefas');
  const tarefas = listaSave.children;
  const tarefasSalvas = [];
  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = {
      texto: tarefas[i].innerHTML,
      class: tarefas[i].className,
      atributos: tarefas[i].attributes,
    };
    tarefasSalvas.push(tarefa);
  }
  localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
});
