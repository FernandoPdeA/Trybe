let name2 = "Rodrigo";

newObject = {
  name: "Fernando",
  age: 30,
  class: "JS"
}

//tipo de dado
console.log(typeof newObject);
console.log(newObject.age);
console.log(newObject.name + ' ' + 'ama' + ' ' + newObject.class);

//---------------------------------------------------------------------------------------------------------------------

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property + ' = ' + object[property]);
}

//---------------------------------------------------------------------------------------------------------------------

function greetingsMessage(name2) {
  console.log("Seja bem vindo, " + name2);
};
greetingsMessage(name2);

//---------------------------------------------------------------------------------------------------------------------

function sum(a, b) {
  a + b;
  // return a + b;
}
console.log(sum(1, 2));
sum(1, 2);

//---------------------------------------------------------------------------------------------------------------------

function greetingsMessage2(name3) {
  console.log("Boas vindo, " + name3);
}
greetingsMessage2('Adriano');