//genero un numero randomico da 1 a 6 per il giocatore e lo stampo
var dadi_giocatore = Math.floor(Math.random() * 6) + 1 ;
document.getElementById('lancio-giocatore').innerHTML = "Il tuo lancio è di " + dadi_giocatore;

//genero un numero randomico da 1 a 6 per il computer
var dadi_computer = Math.floor(Math.random() * 6) + 1 ;
document.getElementById('lancio-computer').innerHTML = "Il lancio del computer è di " + dadi_computer;

//stampo esito nel DOM nell'elemento con id risultato
if (dadi_giocatore > dadi_computer) {
  document.getElementById('risultato').innerHTML = "Hai vinto!";
} else if (dadi_giocatore < dadi_computer) {
  document.getElementById('risultato').innerHTML = "Hai perso!";
} else {
  document.getElementById('risultato').innerHTML = "Pareggio!";
}
