//creo array
var mail_list = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com"];

//chiedo all'utente la sua mail e la salvo in variabile
var mail = prompt("Qual è la tua mail?");
console.log(mail);

//creo var soldatino
var soldatino = false;

//scorro array
for (var i = 0; i < mail_list.length; i++) {
  if (mail_list[i] == mail) {
    soldatino = true;
  }
}

//stampo risposta nel DOM nell'elemento con id accesso
if (soldatino) {
  document.getElementById('accesso').innerHTML = "Accesso consentito";
} else {
  document.getElementById('accesso').innerHTML = "Accesso negato";
}
