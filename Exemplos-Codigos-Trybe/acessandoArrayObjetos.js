let informacoesAlunos = [
  turma1 = [
    turnoDaManhã = {
      nome: "João",
      idade: 20,
      sexo: "masculino",
    },
    turnoDaTarde = {
      nome: 'Mômica',
      idade: 19,
      sexo: "feminnino",
    },
    turnoDaNoite = {
      nome: 'Pedro',
      idade: 30,
      sexo: "masculino",
    }
  ],
  turma2 = [
    TurnoDaManhã = {
      nome: "Maria",
      idade: 24,
      sexo: "feminino",
    },
    TurnoDaTarde = {
      nome: 'Marcos',
      idade: 30,
      sexo: "masculino",
    },
    TurnoDaNoite = {
      nome: 'Daniela',
      idade: 27,
      sexo: "feminino",
    }
  ],

];

console.log(informacoesAlunos);
console.log(`O nome do(a) aluno(a) da turma1 do turno da noite é ${informacoesAlunos[0][2]["nome"]}`);
console.log(`O nome do(a) aluno(a) da turma2 do turno da noite é ${informacoesAlunos[1][2]["nome"]}`);
console.table(informacoesAlunos[0]);
console.table(informacoesAlunos[1][0]);