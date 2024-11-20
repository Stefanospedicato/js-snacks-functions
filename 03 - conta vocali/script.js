/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/*
1.Creo una funzione.
2.Devo avere un contatore che mi si incrementa quando incontra una vocale.
*/

function numeroVocali(word){
  let contatore = 0
  const vocali = ['a','e','i','o','u']
  for(let i = 0; i < word.length; i++ ){
    if(vocali.includes(word[i]))
      contatore++
  }
  return contatore
}


// Invoca la funzione qui e stampa il risultato in console

const numeroDiVocali = (numeroVocali(word))
console.log(numeroDiVocali)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)