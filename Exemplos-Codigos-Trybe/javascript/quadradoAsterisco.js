//Quadrado de asteriscos de lados iguais

n = 2;
asterisco = '*';


for (i = 0; i < n; i++) {
  console.log(asterisco.repeat(n));
  if (asterisco.length > 1) {
    console.log(asterisco.repeat(n));
  }
}
