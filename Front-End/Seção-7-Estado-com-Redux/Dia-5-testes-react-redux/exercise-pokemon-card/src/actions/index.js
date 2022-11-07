import randomNumber from '../utils/randomNumber';

export const GET_IMAGE = 'GET_IMAGE';
export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const GET_NAME = 'GET_NAME';
export const FAILED_REQUEST = 'FAILED_REQUEST';

function getImage(json) {
  return { type: GET_IMAGE, payload: json.sprites.front_default };
}

function getName(json) {
  return { type: GET_NAME, payload: json.name };
}

function requestPokemon() {
  return { type: REQUEST_IMAGE };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchPokemon() {
  return async (dispatch) => {
    dispatch(requestPokemon());
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}/`);
      const json = await response.json();
      dispatch(getImage(json));
      dispatch(getName(json));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  };
}
