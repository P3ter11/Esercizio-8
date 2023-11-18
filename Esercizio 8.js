// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2];
const shippingCost = 50;
let ambassador = [];
let sconto = 0.3;


let utenti = [marco, paul, amy]; //Creazione dell'array che contiene tutti gli oggetti e i loro valori (name, lastName ecc).

for(let i=0; i<utenti.length; i++){ //ciclo per controllare ogni singolo elemento dell'array
  
  if (utenti[i].isAmbassador === true){ //controllo valore booleano isAmbassador, se vero applicazione di sconto
    ambassador.push(utenti[i]); //utente inserito nell'array ambassador perchè il valore è true
    sconto *= prices[i]; //applicazione sconto
    prices[i] -= sconto; //prezzo scontato
    if(prices[i]<100){ //controllo se prezzo è minore di 100
      prices[i] += shippingCost; // aggiungo costo spedizione
      console.log(utenti[i].name+ ", "+utenti[i].lastName+ ", "+ "è un ambassador e ha il 30% di sconto: deve pagare: " +prices[i]+ "€ compresa la spedizione"); 
    } else{
      console.log(utenti[i].name+ ", "+utenti[i].lastName+ ", "+ "è un ambassador e ha il 30% di sconto: deve pagare: " +prices[i]+ "€ senza pagare la spedizione");
    }
  }
  else{ // se il valore non è true entra in questo ciclo
    if(prices[i]<100){
      prices[i] += 50;
      console.log(utenti[i].name+ ", "+utenti[i].lastName+ ", "+ "non è un ambassador: deve pagare: " +prices[i]+ "€ compresa la spedizione");
    } else{
      console.log(utenti[i].name+ ", "+utenti[i].lastName+ ", "+ "non è un ambassador: deve pagare: " +prices[i]+ "€ senza pagare la spedizione");
    }
  }
  
}

for(let i=0; i<ambassador.length; i++){ //stampa degli elementi di un vettore
  console.log(ambassador[i]);
}

