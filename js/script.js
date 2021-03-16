// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// variabili
var numeriRandom = [];
var numeriUtente = "";
var risultato = "i numeri da ricordare sono: " + " ";

// funzioni
// funzione che determina un numero random
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// 1. genero un alert con 5 numeri random da 1 a 100
// genero 5 numeri numeri random e li inserisco in un array
for (var i = 0; i < 5; i++) {
  var numero = numRandom(1, 100);
  if (numeriRandom.includes(numero) == false) {
    numeriRandom[i] = numero;
    if (i != 4) {
      risultato += numeriRandom[i] + ", " + " ";
    } else {
      risultato += numeriRandom[i];
    }
  } else {
    i--;
  }
}


// genero l'alert
alert(risultato);

// 2. faccio partire il timer di 30 secondi
var numCountdown = 30;

var countdown = setInterval(function () {
  console.log(numCountdown);

  if (numCountdown == 0) {
    clearInterval(countdown);
    // 3. l'utente dopo i 30 secondi inserisce per 5 volte un numero
    var numeriUtente = [];
    for (var j = 0; j < 5; j++) {
      numeriUtente[j] = parseInt(prompt("inserisci il " + (j + 1) + "° " + "numero"));
    }
    console.log(numeriUtente);
  }

  numCountdown -= 1;


}, 1000);
