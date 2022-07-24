let singer = {
  name: 'João',
  age: 20,
  nickName: 'João',
  lastName: 'Silva',
  bestAlbuns: { estilo1: 'Rock', estilo2: 'Rap', estilo3: 'Eletronica' },
}

let totalInformation = `Seu nome é '${singer.name} ${singer.lastName}' ele tem '${singer.age}',
 seus estilos de músicas preferidas são '${singer.bestAlbuns.estilo1}' , '${singer.bestAlbuns.estilo2}' 
  e '${singer.bestAlbuns.estilo3}'.`

console.log('O nome do artista é : ' + singer.name + ' ' + singer.lastName + ',' + ' e tem ' + singer.age + ' anos.');
console.log('O nome do artista é : ' + singer['name'] + ' ' + singer['lastName'] + ',' + ' e tem ' + singer['age'] + ' anos.');
console.log(`O nome do artista é : ${singer.name} ${singer.lastName}, e tem ${singer.age} anos.`);
console.log(singer['bestAlbuns'].estilo3);
console.log(totalInformation);
console.table(singer);