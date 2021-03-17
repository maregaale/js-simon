// variabili
var numeriRandom = [];
var numeriUtente = "";
var risultato = "i numeri da ricordare sono: " + " ";
var numeriUtente = [];
var numOk = [];
var numCountdown = 5;

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
var countdown = setInterval(function () {
  console.log(numCountdown);

  if (numCountdown == 0) {

    clearInterval(countdown);

    // 3. l'utente dopo i 30 secondi inserisce per 5 volte un numero
    for (var j = 0; j < 5; j++) {
      var numeroUtente = parseInt(prompt("inserisci il " + (j + 1) + "° " + "numero"));

      if (numeriUtente.includes(numeroUtente) == false) {
        numeriUtente.push(numeroUtente);
      } else {
        j--;
        alert("non inserire numeri uguali");
      }
    }

    // 4. controllo se tra i numeri inseriti dall'utente ce n'è uno di quelli nell'alert
    for (var k = 0; k < numeriUtente.length; k++) {
      if (numeriRandom.includes(numeriUtente[k]) == true) {
        numOk.push(numeriUtente[k]);
      }
    }

    // 5. stampo il risultato in quantità e qualità dei numeri ricordati
    if (numOk.length == 0) {
      console.log("mi spiace non hai indovinato nessun numero");
    } else if (numOk.length == 1) {
      console.log("hai ricordato " + numOk.length + " numero");
      console.log("il numero da te ricordato è: " + numOk);
    } else {
      console.log("hai ricordato " + numOk.length + " numeri");
      console.log("i numeri da te ricordati sono: " + numOk);
    }
  }

  numCountdown -= 1;

}, 1000);
