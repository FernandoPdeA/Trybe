import React from 'react';
import { screen, act, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import mockData from './helpers/mockData';

const inputEmail = () => screen.getByTestId('email-input');
const inputPassword = () => screen.getByTestId('password-input');
const getTotal = () => screen.queryByTestId('total-field');
const valueInputscreen = () => screen.getByTestId('value-input');
const currencyInputScreen = () => screen.getByTestId('currency-input');
const descriptionInputScreen = () => screen.getByTestId('description-input');
const methodInputScreen = () => screen.getByTestId('method-input');
const ButtonSubmitScreen = () => screen.getByTestId('button-submit');
const loadingScreen = () => screen.getByText(/Loading.../i);

const initialStateMock = {
  login: {
    email: 'pupygreen@gmail.com',
    password: '123456',
  },
};

describe('Testa a aplicação', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Testa se a página principal contem um imput de email', () => {
    renderWithRouterAndRedux(<App />);
    const input = inputEmail();
    expect(input).toBeInTheDocument();
  });

  it('Testa se a página principal contém um imput de senha', () => {
    renderWithRouterAndRedux(<App />);
    const input = inputPassword();
    expect(input).toBeInTheDocument();
  });

  it('Testa se tem um botão na página de login', () => {
    renderWithRouterAndRedux(<App />);

    expect(password).toHaveProperty('type', 'password');
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Entrar');
  });

  it('Testando se o botão esta desabilitado ao passar informações incorretas aos inputs', () => {
    renderWithRouterAndRedux(<App />);
    const test = ['qualquer coisa', 'qualquer coisa'];
    const input = inputEmail();
    const inputPass = inputPassword();
    const button = screen.getByRole('button');

    test.forEach((item) => {
      const infoIntputs = item.split(' ');
      userEvent.type(input, infoIntputs[0]);
      userEvent.type(inputPass, infoIntputs[1]);
      expect(button).toBeDisabled();
    });
  });

  it('Testa se a página principal contém um texto "TrybeWallet', () => {
    renderWithRouterAndRedux(<App />);
    const loginText = screen.getByText(/TrybeWallet/i);
    expect(loginText).toBeInTheDocument();
  });

  it('Testa se ao digitar um email e uma senha a página será direcionada para "/carteira" ', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const input = inputEmail();
    const inputPass = inputPassword();
    const loginButton = screen.getByTestId('login-button');

    userEvent.type(input, initialStateMock.login.email);
    userEvent.type(inputPass, initialStateMock.login.password);

    act(() => {
      fireEvent.click(loginButton);
    });

    expect(history.location.pathname).toBe('/carteira');
  });

  it('Testa se é renderizado o email digitado anteriormente na tela de login', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const input = inputEmail();
    const inputPass = inputPassword();
    const loginButton = screen.getByTestId('login-button');

    userEvent.type(input, initialStateMock.login.email);
    userEvent.type(inputPass, initialStateMock.login.password);

    act(() => {
      fireEvent.click(loginButton);
    });

    expect(history.location.pathname).toBe('/carteira');
    await waitForElementToBeRemoved(loadingScreen);

    const infoUser = screen.getByText('Usuário: pupygreen@gmail.com');
    expect(infoUser).toBeInTheDocument();
  });

  it('Testa se estiver em uma rota não existente, a página NotFound será exibida"', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    act(() => {
      history.push('/rota-que-nao-existe');
    });

    const h1Text = screen.getByText(/Ops...página não encontrada!/i);
    expect(h1Text).toBeInTheDocument();
  });

  it('Testa se a api é buscada corretamente', async () => {
    renderWithRouterAndRedux(<App />, { initialStateMock, initialEntries: ['/carteira'] });
    await waitForElementToBeRemoved(loadingScreen);
    expect(await global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://economia.awesomeapi.com.br/json/all');
  });

  it('Testa se a iformação da primeira moeda esta correta', async () => {
    renderWithRouterAndRedux(<App />, { initialStateMock, initialEntries: ['/carteira'] });
    await waitForElementToBeRemoved(loadingScreen);
    const { findByText } = screen;
    const { code } = mockData.USD;

    expect(await findByText(code)).toBeInTheDocument();
  });

  it('Testa se inicia em "0" o valor do data-testid="total-field"', async () => {
    renderWithRouterAndRedux(<App />, { initialStateMock, initialEntries: ['/carteira'] });
    await waitForElementToBeRemoved(loadingScreen);
    const total = screen.getByTestId('total-field');
    expect(total).toHaveTextContent('0');
  });

  it('Testa se o valor total esta correto', async () => {
    const initialState = {
      user: {
        email: 'emailqualquer@gmail.com',
      },
      wallet: {
        currencies: [...Object.keys(mockData).filter((currency) => currency !== 'USDT')],
        expenses: [{
          id: 0,
          value: '11',
          currency: 'EUR',
          method: 'Dinheiro',
          tag: 'Alimentação',
          description: 'pizza',
          exchangeRates: mockData,
        },
        {
          id: 1,
          value: '1',
          currency: 'USD',
          method: 'Cartão de debito',
          tag: 'Lazer',
          description: 'breja',
          exchangeRates: mockData,
        }],
        total: '61.15',
      },
    };

    renderWithRouterAndRedux(<App />, { initialState, initialEntries: ['/carteira'] });
    await waitForElementToBeRemoved(loadingScreen);
    const total = getTotal();
    expect(total).toHaveTextContent('61.15');
  });

  it('Testa se os campos existem no documento', async () => {
    renderWithRouterAndRedux(<App />, { initialStateMock, initialEntries: ['/carteira'] });
    await waitForElementToBeRemoved(loadingScreen);
    const descriptionInput = descriptionInputScreen();
    const valueInput = valueInputscreen();
    const currencyInput = currencyInputScreen();
    const methodInput = methodInputScreen();
    const tagInput = screen.getByTestId('tag-input');
    const addButton = screen.getByTestId('button-submit');

    expect(descriptionInput).toBeInTheDocument();
    expect(valueInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it('Testa se é possível inserir os valores nos campos"', async () => {
    renderWithRouterAndRedux(<App />, { initialStateMock, initialEntries: ['/carteira'] });
    await waitForElementToBeRemoved(loadingScreen);
    const valueInput = valueInputscreen();
    const descriptionInput = descriptionInputScreen();
    const currencyInput = currencyInputScreen();
    const methodInput = methodInputScreen();
    const tagInput = screen.getByTestId('tag-input');

    act(() => {
      userEvent.type(valueInput, '2000');
      userEvent.type(descriptionInput, 'notbook');
      userEvent.type(currencyInput, 'EUR');
      userEvent.type(methodInput, 'Dinheiro');
      userEvent.type(tagInput, 'Trabalho');
    });

    expect(valueInput).toHaveValue(Number('2000'));
    expect(descriptionInput).toHaveValue('notbook');
    expect(currencyInput).toBeInTheDocument('EUR');
    expect(methodInput).toBeInTheDocument('Dinheiro');
    expect(tagInput).toBeInTheDocument('Trabalho');
  });

  it('Testa se as informações estão na tela após prencher os campos e clicar em "Adicionar dispesa"', async () => {
    renderWithRouterAndRedux(<App />, { initialStateMock, initialEntries: ['/carteira'] });
    await waitForElementToBeRemoved(loadingScreen);

    const valueInputValue = valueInputscreen();
    const descriptionInput = descriptionInputScreen();
    const currencyInput = currencyInputScreen();
    const methodInput = methodInputScreen();
    const tagInput = screen.getByTestId('tag-input');
    const addButton = ButtonSubmitScreen();

    act(() => {
      userEvent.type(valueInputValue, '2000');
      userEvent.type(descriptionInput, 'notbook');
      userEvent.type(currencyInput, 'EUR');
      userEvent.type(methodInput, 'Dinheiro');
      userEvent.type(tagInput, 'Trabalho');
    });

    fireEvent.click(addButton);

    const value = await screen.findByText('2000.00');
    const description = await screen.findByText('notbook');
    const currency = await screen.findByText('EUR');
    const method = await screen.findByText('Dinheiro');
    const tag = await screen.findByText('Trabalho');

    expect(value).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
  });
});
