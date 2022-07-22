//Entrada
let username = "fernando";
let password = "1234";
let access;
let paes = 6;
let sacola = 0;

//Processamento
if (username === "fernando" && password === "1234") {
  console.log("Acesso permitido");
  access = true;
} else {
  console.log("Acesso negado");
  access = false;
};

//saida
console.log(access);

//quando o acesso for permitido, adicione os paes na sacola
if (access) {
  for (let i = 0; i < paes; i++) {
    sacola += 1;
  }
  console.log(`Adicionando ${sacola} paes na sacola!`);
} else {
  console.log("Pães não adicionados na sacola!");
}