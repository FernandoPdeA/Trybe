const input = document.querySelector('#text-input');
const paragraph = document.querySelector('#meme-text');

input.addEventListener('keyup', () => {
  paragraph.innerHTML = input.value;
});

const uploadInput = document.querySelector('#meme-insert');
uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    const img = document.querySelector('#meme-image');
    img.src = reader.result;
  });
  reader.readAsDataURL(file);
});

const buttosFire = document.querySelector('#fire');
const borderImage = document.querySelector('.container');
buttosFire.addEventListener('click', () => {
  borderImage.style.border = '3px solid rgb(255, 0, 0)';
  borderImage.style.borderStyle = 'dashed';
  borderImage.style.borderRadius = '10px';
});

const buttosWater = document.querySelector('#water');
buttosWater.addEventListener('click', () => {
  borderImage.style.border = '5px solid rgb(0, 0, 255)';
  borderImage.style.borderStyle = 'double';
  borderImage.style.borderRadius = '10px';
});

const buttosEarth = document.querySelector('#earth');
buttosEarth.addEventListener('click', () => {
  borderImage.style.border = '6px solid rgb(0, 128, 0)';
  borderImage.style.borderStyle = 'groove';
  borderImage.style.borderRadius = '10px';
});

const memeImage1 = document.querySelector('#meme-1');
const memeImage2 = document.querySelector('#meme-2');
const memeImage3 = document.querySelector('#meme-3');
const memeImage4 = document.querySelector('#meme-4');

memeImage1.addEventListener('click', () => {
  const img = document.querySelector('#meme-image');
  img.src = 'imgs/meme1.png';
});

memeImage2.addEventListener('click', () => {
  const img = document.querySelector('#meme-image');
  img.src = 'imgs/meme2.png';
});

memeImage3.addEventListener('click', () => {
  const img = document.querySelector('#meme-image');
  img.src = 'imgs/meme3.png';
});

memeImage4.addEventListener('click', () => {
  const img = document.querySelector('#meme-image');
  img.src = 'imgs/meme4.png';
});
