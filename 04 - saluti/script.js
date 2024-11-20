/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
/*
1. Creo una funzione che accetta una stringa
2. Devo concatenare la mia stringa ad un testo
*/

function saluto(word){
  return 'Ciao ' + word
}

// Invoca la funzione qui e stampa il risultato in console

const salutoNome = saluto(name);
console.log(salutoNome)

//Risultato atteso se si passa 'Mario': // ciao Mario