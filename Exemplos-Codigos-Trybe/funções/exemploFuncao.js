function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(10, 20));

//----------------------------------------------------------------------------------------------------------------------

let myArray = []

function genarateArray() {
  for (let i = 0; i < 100; i++) {
    myArray.push(Math.floor(Math.random() * 100))
    myArray.push(i);
  }
  return myArray;
}

console.log(genarateArray());