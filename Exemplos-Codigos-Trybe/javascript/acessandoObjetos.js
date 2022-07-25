let person = {
  name: 'Fernando',
  age: 20,
  nickName: 'pupy',
  lastName: 'Andrade',
  bestAlbuns: { estilo1: 'Rock', estilo2: 'Rap', estilo3: 'Eletronica' },
}

let totalInformation = `Seu nome é '${person.name} ${person.lastName}' ele tem '${person.age}',
 seus estilos de músicas preferidas são '${person.bestAlbuns.estilo1}' , '${person.bestAlbuns.estilo2}' 
  e '${person.bestAlbuns.estilo3}'.`

console.log('O nome do artista é : ' + person.name + ' ' + person.lastName + ',' + ' e tem ' + person.age + ' anos.');
console.log('O nome do artista é : ' + person['name'] + ' ' + person['lastName'] + ',' + ' e tem ' + person['age'] + ' anos.');
console.log(`O nome do artista é : ${person.name} ${person.lastName}, e tem ${person.age} anos.`);
console.log(person['bestAlbuns'].estilo3);
console.log(totalInformation);
console.table(person);