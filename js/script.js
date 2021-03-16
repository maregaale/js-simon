// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// variabili


// funzioni
// funzione che determina un numero random
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// 1. genero un alert con 5 numeri random da 1 a 100
// genero 5 numeri numeri random e li inserisco in un array
var numeriRandom = "";

for (var i = 0; i < 5; i++) {
  var numero = numRandom(1, 100);
  if (numeriRandom.includes(numero) == false) {
    numeriRandom += numero + " " + " ";
  }
}

alert("i numeri da ricordare sono:  " + numeriRandom);
