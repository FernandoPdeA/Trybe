let counter = 0;


while (counter < 11) {
  console.log(counter);
  counter++;
}


function dice() {
  return Math.ceil(Math.random() * 6);
}

let d1 = dice();
let d2 = dice();

while (d1 === d2) {
  d2 = dice();
}