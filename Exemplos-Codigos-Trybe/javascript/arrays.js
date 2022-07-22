var listaNomes = ["João", "Maria", "José", "Pedro", "Marcos", "Luiz", "Marta", "Fernando"];


for (var i = 0; i < listaNomes.length; i++) {
  var mensagem = "Boas vindas, " + listaNomes[i] + "!";

  if (listaNomes[i]) {
    console.log(mensagem);
  }
  if (listaNomes[i] == "Fernando") {
    console.log("Encontrei o nome Fernando!");
  }
}
