const API_URL = 'https://icanhazdadjoke.com/';
const h2 = document.querySelector('h2');

const fetchJoke = async () => {
  try {

    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };

    const result = await fetch(API_URL, myObject)
    const data = await result.json();
    return data.joke;
  } catch (error) {
    return 'Always check your internet connection and your URLs';
  }
};

window.onload = () => fetchJoke().then((data) => (h2.innerHTML = data));