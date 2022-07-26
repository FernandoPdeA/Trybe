
let valores = [3, 7, 10, 10, 9, 9];

let calc = function (total, item, indice, array) {
  total = total + item;

  if (indice == array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
}

let media = valores.reduce(calc);

console.log(media);
// document.write(media);
// window.alert(media);