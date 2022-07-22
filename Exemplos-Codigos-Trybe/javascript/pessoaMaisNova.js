let Nat = 20;
let Renan = 34;
let Sincero = 26;
let maisVelho = "";

//o mais vellho 
if (Nat > Renan && Nat > Sincero) {
  maisVelho = "Nat";
} if (Renan > Sincero && Renan > Nat) {
  maisVelho = "Renan";
} if (Sincero > Nat && Sincero > Renan) {
  maisVelho = "Sincero";
}

console.log("O mais velho é: " + maisVelho);