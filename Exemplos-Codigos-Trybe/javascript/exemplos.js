let nomes = ['João', 'Maria', 'José'];

console.log(nomes.unshift()); // Adiciona um elemento no inicio do array
console.log(nomes.pop()); // remove o último elemento
console.log(nomes.shift()); // remove o primeiro elemento
console.log(nomes.push('Pedro')); // adiciona um elemento no final do array
console.log(nomes.splice(1, 1, 'Pedro')); // remove um elemento do array e adiciona outro 
console.log(nomes.slice(1, 2)); // retorna um novo array com os elementos do indice 1 ao 2
console.log(nomes.indexOf('Pedro')); // retorna o indice do elemento
console.log(nomes.includes('Pedro')); // retorna true ou false se o elemento existe no array
console.log(nomes.join(' - ')); // retorna um string com os elementos do array separados por um caracter
console.log(nomes.reverse()); // inverte o array
console.log(nomes.sort()); // ordena o array
console.log(nomes.sort((a, b) => b.localeCompare(a))); // ordena o array de acordo com o alfabeto
console.log(nomes.sort((a, b) => a - b)); // ordena o array de acordo com o valor
console.log(nomes.sort((a, b) => b.localeCompare(a, 'pt-BR'))); // ordena o array de acordo com o alfabeto
console.log(nomes.sort((a, b) => a - b, 'pt-BR')); // ordena o array de acordo com o valor

