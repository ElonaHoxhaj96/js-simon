//creo un ciclo che mi svolga qualcosa per 5 volte 
let cicloCinque = randomicoDentroRage (1 , 500, 5);
console.log(cicloCinque);
// stampiamo i numeri in pagina 

let contenitore =document.getElementById('contenitor');
let numeri = document.createElement('div');
numeri.innerHTML = cicloCinque;
contenitore.append(numeri);
//impostare un timer di 30 dopo i quali i numeri casuali scompaiono
setTimeout(nascondi, 3000)
//creo una funzione per rendere il mio elemento nascosto 
function nascondi(){
    numeri.classList.add('hiden');
}


//chieder all'utente di inserire i numeri che ha visto poco prima una volta tramiter un prompt
// restituire il risultato di quelli giusti 

















