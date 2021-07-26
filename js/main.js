function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
var bombe = [];
while (bombe.length < 16) {
    var rndNum = getRndInteger(1, 100);
    if (bombe.includes(rndNum) == false) {
        bombe.push(rndNum);
    }
}

// il computer deve chiedere all’utente (100 - il numero delle bombe) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var campo = [];
var punteggio = 0;

do // ripeti finchè l'array campo non è pieno o finchè il numero inserito non è presente in bombe
{
    var numUtente = parseInt(prompt("inserisci un numero compreso tra 1 e 100"));
    // L’utente non può inserire più volte lo stesso numero altrimenti si continua chiedendo all’utente un altro numero.
    if ((campo.includes(numUtente) == false) && (isNaN(numUtente) == false)) {
        campo.push(numUtente);
        console.log ("numero inserito: " + numUtente);
        punteggio++;
    } else {
        while ((campo.includes(numUtente) == true) || (isNaN(numUtente) == true)) {
            numUtente = parseInt(prompt("hai già inserito questo numero oppure non hai inserito nessun numero. inserisci un numero compreso tra 1 e 100"));
        }
        campo.push(numUtente);
        console.log ("numero inserito: " + numUtente);
        punteggio++;
    }
}
while ((campo.length < 100 - bombe.length) && (bombe.includes(numUtente) == false));

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
if (campo.length == 20 - bombe.length)
{
    console.log("partita conclusa, hai totalizzato " + punteggio + " punti");
    console.log("hai raggiunto il punteggio massimo");
}
else if (bombe.includes(numUtente) == true)
{
    console.log ("bombe: " + bombe.sort(function(a, b){return a - b})); //per ordinare numericamente le bombe
    console.log(numUtente + " è una bomba");
    console.log("partita conclusa, hai totalizzato " + punteggio + " punti");
}