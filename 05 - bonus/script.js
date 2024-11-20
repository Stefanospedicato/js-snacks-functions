/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
/*
1.Creo una funzione che accetti una sola stringa
2. Creo la variabile per l'ora e in base all'ora do' i messaggi differenti
*/

function salutoGiorno(word){
  let message;
  const date = new Date()
  const hour = date.getHours()
  if(hour<14){
    message = 'Buongiorno '
  } else if(hour>17){
    message = 'Buonasera '
  } else{
    message = 'Buon pomeriggio '
  }
  return message + word
}

//ARROW FUNCTION
/*
const salutoGiorno = word = {
  let message;
  const date = new Date()
  const hour = date.getHours()
  if(hour<14){
    message = 'Buongiorno '
  } else if(hour>17){
    message = 'Buonasera '
  } else{
    message = 'Buon pomeriggio '
  }
  return message + word
}
*/

// Invoca la funzione qui e stampa il risultato in console

const saluto = salutoGiorno(name);
console.log(saluto)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.