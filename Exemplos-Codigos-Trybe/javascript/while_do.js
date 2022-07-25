let counter = 0;


while (counter < 11) {
  console.log(counter);
  counter++;
}


function dice() {
  return Math.ceil(Math.random() * 6);
}

let d1 = dice(4);
let d2 = dice(4);

while (d1 === d2) {
  d2 = dice();
}