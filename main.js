//creo un ciclo che mi svolga qualcosa per 5 volte 
for (let i = 0; i < 5; i++){
    //funzione con numeri casuali
    function numeroRandomico (){
        numeroGenerico =  Math.floor( Math.random() * 100);
        return numeroGenerico;
    }
    console.log(numeroRandomico(i));
    //selezione il contenitore all'interno del quale stampero in numeri che poi scompariranno 
let contenitore =document.getElementById('contenitor');
let numeri = `<div class="nr_generato">${numeroRandomico(i)}</div>`;
contenitore.innerHTML += numeri;
}


//impostare un timer di 30 dopo i quali i numeri casuali scompaiono
//chieder all'utente di inserire i numeri che ha visto poco prima una volta tramiter un prompt
// restituire il risultato di quelli giusti 
