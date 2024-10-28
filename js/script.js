const distanza = prompt("dimmi quanti km devi percorrere");
const eta = prompt("dimmi la tua eta");

// Controlli input
const distanzaN = parseInt(distanza);
const etaN = parseInt(eta);

if (isNaN(distanzaN) || isNaN(etaN)) {
    console.error("Errore: entrambi i valori devono essere numeri validi.");
} else {
    // Continua con il resto del programma
    console.log("I valori sono validi, procedo con il calcolo...");


    console.log(distanza, eta);
    // Costanti
    const euroKm = 0.21;
    const minorenne = etaN < 18;
    const over65 = etaN > 65;

    //Esecuzione logica

    let result;

    const prezzobase = (distanzaN * euroKm);

    if (!minorenne && !over65) {
        result = prezzobase;
    } else if (minorenne) {

        result = (prezzobase * 0.8)
    } else {
        result = (prezzobase * 0.6)
    }



    console.log(result.toFixed(2));

}

