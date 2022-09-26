function addPokemon(pokemon) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = pokemon.name;
  img.src = pokemon.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}

function addErroInDisplay(msgError) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.className = "error";

  const divErrorText = document.createElement('div');

  divErrorText.innerHTML = msgError;

  li.appendChild(divErrorText);

  ul.appendChild(li);
}

function fetchPokemon(pokemonName) {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((pokemon) => {
      const elementPokemon = {
        name: pokemon.name,
        imageUrl: pokemon.sprites.front_default,
      }
      console.log(elementPokemon);
      addPokemon(elementPokemon);
    }).catch((error) => {
      addErroInDisplay("deu ruim");
    });
}

async function fetchPokemonAsync(pokemonName) {
  try {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(endpoint);
    const pokemon = await response.json();

    const ditto = {
      name: pokemon.name,
      imageUrl: pokemon.sprites.front_default,
    }
    console.log(ditto);
    addPokemon(ditto);
  } catch (error) {
    addErroInDisplay("Pokemon não encontrado!")
  }
}

function requestPokemons() {
  fetchPokemon('ditto')
    .then(() => fetchPokemon('pikachu'))
    .then(() => fetchPokemon('charmander'))
    .then(() => fetchPokemon('charizard'))
    .then(() => fetchPokemon('mewtwo'))
}

window.onload = requestPokemons;