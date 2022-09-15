// Cria o elemento de imagem do produto.
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

// Cria qualquer elemento.
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// Cria o elemento do produto.
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};

// Constantes predefinidas.
const cartItems = document.querySelector('.cart__items');
const ol = document.querySelector('.cart__items');
const documentQueryCart = document.querySelectorAll('.cart__item');

// Salva os itens do carrinho no localStorage.
function saveCartItemsLocalStorage() {
  localStorage.setItem('cartItems', cartItems.innerHTML);
}

// Função que recupera o ID do produto.
const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

// Apaga todo o conteúdo do carrinho de compras.
const button = document.querySelector('.empty-cart');
button.addEventListener('click', (e) => {
  e.preventDefault();
  ol.innerHTML = '';
});

// Apaga o item do carrinho de compras.
const cartItemClickListener = (event) => {
  ol.addEventListener('click', cartItemClickListener);
  event.target.remove();
  saveCartItemsLocalStorage();
};

// Carrega os itens do carrinho do localStorage ao iniciar a página, e adiciona o evento de clique.
function getLodingCartItensLocalStorage() {
  cartItems.innerHTML = localStorage.getItem('cartItems');
  const cartItemLoadingStorage = documentQueryCart;
  cartItemLoadingStorage.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
}

// Subtrai o preço do item do carrinho.
function subtractPrice() {
  const cartItemSubPrice = document.querySelectorAll('.cart__item');
  const mathAbs = Math.abs;
  let total = 0;
  cartItemSubPrice.forEach((item) => {
    const price = item.innerText.split('$')[1];
    total -= parseFloat(price);
  });
  const span = document.querySelector('.total-price');
  span.innerText = mathAbs(total);
}

// Mantém a li sempre pronta para ser excluída.
setInterval(() => {
  ol.addEventListener('click', cartItemClickListener);
  subtractPrice();
}, 1);

// Cria a li e adiciona um evento de clique.
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// cria o elemento que vai mostrar o resultado da soma.
function createElementCounter() {
  const cartItemCounter = document.querySelector('.cart');
  const span = document.createElement('span');
  span.className = 'total-price';
  cartItemCounter.appendChild(span);
  const h4 = document.createElement('h4');
  h4.innerText = 'Total: $';
  h4.className = 'total-h4';
  h4.appendChild(span);
  cartItemCounter.appendChild(h4);
}
createElementCounter();

// Soma ao clicar no botão de adicionar ao carrinho.
function totalPrice() {
  const cartItemPrice = documentQueryCart;
  let total = 0;
  cartItemPrice.forEach((item) => {
    const price = item.innerText;
    total += parseFloat(price);
  });
  const span = document.querySelector('.total-price');
  span.innerText = total;
}

// Adiciona o produto ao carrinho.
const addProductToCart = async (event) => {
  const item = event.target;
  const itemID = getIdFromProductItem(item.parentElement);
  await fetchItem(itemID).then((data) => {
    const { id, title, price } = data;
    ol.appendChild(createCartItemElement({ id, title, price }));
    saveCartItemsLocalStorage();
    totalPrice();
  });
};

// Percorre todos os botões e aplica a função que adiciona o produto ao carrinho.
const addEventToProduct = () => {
  const buttonAdd = document.querySelectorAll('.item__add');
  buttonAdd.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      addProductToCart(e);
    });
  });
};

// Cria a mensagem `carregando...`.
function loading() {
  const loadingMessage = document.createElement('span');
  loadingMessage.className = 'loading';
  loadingMessage.innerText = 'carregando...';
  document.body.appendChild(loadingMessage);
}

// Apaga a mensagem `carregando...`.
function stopLoading() {
  const loadingMessageRemove = document.querySelector('.loading');
  loadingMessageRemove.remove();
}

// Elementos carregados ao iniciar a página.
window.onload = async () => {
  getLodingCartItensLocalStorage();
  loading();
  await fetchProducts('computador').then((data) => {
    const products = data.results;
    const section = document.querySelector('.items');
    products.forEach((product) => {
      const { id, title, thumbnail } = product;
      section.appendChild(createProductItemElement({ id, title, thumbnail }));
    });
    addEventToProduct();
  });
  stopLoading();
};
