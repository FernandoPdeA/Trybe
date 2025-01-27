const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função: 
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

*/

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    const menu = ({
      food: { 'coxinha': 3.9, 'sopa': 9.9, 'sanduiche': 3.9, 'pizza': 3.9 },
      drink: { 'agua': 5.1, 'cerveja': 6.9, 'refrigerante': 3.3, 'suco': 3.3 }
    });

    expect(createMenu(menu)).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');

    expect(createMenu(menu).fetchMenu()).toEqual({
      food: { coxinha: 3.9, sopa: 9.9, sanduiche: 3.9, pizza: 3.9 },
      drink: { agua: 5.1, cerveja: 6.9, refrigerante: 3.3, suco: 3.3 }
    });
    expect(Object.keys(createMenu(menu).fetchMenu())).toEqual(['food', 'drink']);

    expect(createMenu(menu).fetchMenu()).toEqual(menu);

    expect(createMenu()).toHaveProperty('consumption');

    const objetoRetornado = createMenu(menu);
    objetoRetornado.order("coxinha");
    objetoRetornado.consumption // Retorno: ["coxinha"]
    expect(objetoRetornado.consumption).toEqual(["coxinha"]);

    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');
    objetoRetornado.pay()
    expect(objetoRetornado.pay()).toBe(18.48);
  });
});
