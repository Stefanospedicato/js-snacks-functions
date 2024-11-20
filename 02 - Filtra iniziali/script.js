/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

/* 
1. Creo funzione con un array vuoto da popolare
2. Creo un ciclo che estrae dall'array iniziale solo le stringhe che hanno l'indice 0 uguale alla stringa della lettera 'A' e le inserisco nell'array vuoto.
*/

function inizialeLettera (array, lettera){
  const hannoInizialeLettera =[];
  for(let i=0 ; i < array.length ; i++){
    if(array[i][0] === lettera){
     hannoInizialeLettera.push(array[i])
    }
  }
  return hannoInizialeLettera
}

//ARROW FUNCTION
/*
const inizialeLettera = (array,lettera) => {
  const hannoInizialeLettera =[];
  for(let i=0 ; i < array.length ; i++){
    if(array[i][0] === lettera){
     hannoInizialeLettera.push(array[i])
    }
  }
  return hannoInizialeLettera
}
*/

// Invoca la funzione qui e stampa il risultato in console

const nomiConLetteraA = inizialeLettera(names, 'A')
console.log(nomiConLetteraA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]