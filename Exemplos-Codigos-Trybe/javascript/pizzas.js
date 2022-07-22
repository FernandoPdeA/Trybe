let pizzas = ["Pizza Margarita", "Pizza Napolitana", "Pizza Vegetariana", "Pizza Quattro Stagioni",
  "Pizza Quattro Formaggi", "Pizza Quattro Stagioni", "Pizza Quattro Formaggi"
];


pizzas.push("Pizza Quattro calabrezas");    // adiciona nova pizza no final do array

for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}

let total = pizzas.length;  // total = 8



console.log(pizzas.sort(), total); //ordena las pizzas por orden alfabético
console.log(pizzas.reverse());  //invierte el orden de las pizzas
console.log(pizzas.slice(0, 2)); //muestra las 3 primeras pizzas








