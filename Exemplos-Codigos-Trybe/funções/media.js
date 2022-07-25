let estudante1 = [10, 9, 8, 8, 5]
let estudante2 = [10, 9, 8, 8, 5]
let estudante3 = [10, 9, 8, 8, 5]



function average(estudante) {
  let sum = 0

  for (let i = 0; i < estudante.length; i++) {
    sum += estudante[i]
  }
  let media = sum / estudante.length
  return media;
}

let result = average(estudante1)

if (result >= 8) {
  console.log('Aprovado')
} else {
  console.log('Reprovado')
}

average(estudante1)