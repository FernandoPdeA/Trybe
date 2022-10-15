import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test("Verifica se o loading aparece na tela", () => {
  render(<App />);
  const loading = screen.getByText("Carregando...");
  expect(loading).toBeInTheDocument();
});

test("Verifica se tem um ou mais botões na tela, em seguida pega o primeiro do array encontrado, e verifique se ele contêm o texto enviar", async () => {
  render(<App />);
  const loading2 = screen.getByText("Carregando...");
  await waitForElementToBeRemoved((loading2));
  // getAllByRole esta verificando se tem mais de um botão
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(2);
  // expect(buttons).toHaveLength(2);
  expect(buttons[0]).toHaveTextContent("Enviar");
  // getByRole esta verificando se tem um botão
  // expect(button).toBeInTheDocument();
}
);

test("Verifica se o botão contêm o texto enviar", async () => {
  render(<App />);
  const loading3 = screen.getByText("Carregando...");
  await waitForElementToBeRemoved((loading3));
  const button = screen.getByRole("button", { name: /enviar/i });
  expect(button).toBeInTheDocument();
});

test("Verifica se tem um input", async () => {
  render(<App />);
  const loading4 = screen.getByText("Carregando...");
  await waitForElementToBeRemoved((loading4));
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
}
);

test("Verifica se tem um label com o texto email", async () => {
  render(<App />);
  const loading5 = screen.getByText("Carregando...");
  await waitForElementToBeRemoved((loading5));
  const label = screen.getByText("Email");
  expect(label).toBeInTheDocument();
}
);

test("Verifica se tem um h1 com o texto `email digitado no input:`", async () => {
  render(<App />);
  const loading6 = screen.getByText("Carregando...");
  await waitForElementToBeRemoved((loading6));
  const h1 = screen.getByRole("heading", { name: /email digitado no input:/i });
  expect(h1).toBeInTheDocument();
}
);

test("Verifica se tem um h3, com o testid=`show-email`", async () => {
  render(<App />);
  const loading7 = screen.getByText("Carregando...");
  await waitForElementToBeRemoved((loading7));
  const h3 = screen.getByTestId("show-email");
  expect(h3).toBeInTheDocument();
}
);

test("Verifica se ao digitar o email e clicar no botão enviar, o email é rendereizado", async () => {
  // Acessar os componentes na tela
  render(<App />);
  const loading8 = screen.getByText("Carregando...");
  await waitForElementToBeRemoved((loading8));
  const input2 = screen.getByTestId("input-email");
  const button = screen.getByRole("button", { name: /enviar/i });
  const h1 = screen.getByRole("heading", { name: /email digitado no input:/i });

  // Interagir com os componentes
  // O type é para digitar no input, ele pode receber um terceiro parametro...
  // que é um objeto com a propriedade delay, { delay: 100 }que é o tempo que o teste vai demorar para digitar cada letra
  userEvent.type(input2, "pupygreen@gmail.com");
  userEvent.click(button);

  // Verificar se o email foi renderizado
  setTimeout(() => {
    expect(h1).toHaveTextContent("Email digitado no input: pupygreen@gmail.com");
  }, 3000);
});
