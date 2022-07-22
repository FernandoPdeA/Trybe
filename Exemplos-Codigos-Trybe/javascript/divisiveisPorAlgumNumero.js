//numeros divisiveis por 3

let num = 0;
let num2 = 0;

while (num <= 100) {
  if (num % 3 == 0) {
    console.log(num + " é divisivel por 3 ");
  }
  num++;
}

console.log("-----------------------------------------------------");

while (num2 <= 100) {
  if (num2 % 3 !== 0) {
    console.log(num2 + " não é divisivel por 3 ");
  }
  num2++;
}
  // else if (num % 3 != 0) {
  // console.log(num + " não é divisivel por 3 ");