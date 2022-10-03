const { describe, expect, beforeEach, afterEach } = require("@jest/globals");

let pedidosParaSeremEntregues = [];

const preparaNovoPedido = (pedido) => {
  // código de preparar pedido
  pedidosParaSeremEntregues.push(pedido);
}

const entregarPedido = (pedido) => {
  // código de entregar pedido
  pedidosParaSeremEntregues = pedidosParaSeremEntregues.filter((cadaPedido) => cadaPedido !== pedido);
}

describe("Testa as funcoes preparaNovoPedido e entregarPedido", () => {
  
  beforeEach(() => {
    console.log("antes dos testes");
    pedidosParaSeremEntregues = ['Fritas', 'Casquinha'];
  });

  afterEach(() => {
    console.log("depois dos testes");
    pedidosParaSeremEntregues = [];
  },);


  test("a funcao preparaNovoPedido", () => {
    const expectedArray = ['MilkShake', 'BigMac']


    preparaNovoPedido('MilkShake');
    preparaNovoPedido('BigMac');
    expect(pedidosParaSeremEntregues).toEqual(expect.arrayContaining(expectedArray));
    expect(pedidosParaSeremEntregues).toContain('MilkShake');
  });

  test('a funcao entregarPedido', () => {
    const expectedArray =["Fritas"];

    entregarPedido('Casquinha');
    expect(pedidosParaSeremEntregues).toEqual(expect.arrayContaining(expectedArray));
  });
});