/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
/*
1. Creo funzione per l'array
2. Ho bisogno di popolare un nuovo array e lo creo nella funzione
3. Creo un ciclo for per estrarre le iniziali dei singoli nomi e le inserisco nel nuovo array 
*/
function inizialiNomi(array){
  const iniziali=[];
  for(let i = 0 ; i < array.length ; i++){
    const firstLetter = array[i][0];
    iniziali.push(firstLetter)
  }
  return iniziali
 }

//ARROW FUNCTION
/*const inizialiNomi = array => {const iniziali=[];
                                  for(let i = 0 ; i < array.length ; i++){
                                    const firstLetter = array[i][0];
                                    iniziali.push(firstLetter)
                                  }
                                  return iniziali
                                }
*/

// Invoca la funzione qui e stampa il risultato in console

console.log(inizialiNomi(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]