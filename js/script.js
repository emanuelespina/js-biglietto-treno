
/* RACCOLTA DATI:

1. chiedere il num. di km e salvarlo in una costante
2. chiedere l'età del passeggero e salvarla in una costante
3. convertire le stringhe in num.
4. assicurarsi che siano stati inserito solo valori numerici
*/

const numKmStr = prompt("Chilometri che si desidera percorrere");

if (isNaN(numKmStr) === true) {
    alert("Devi inserire un valore numerico per il campo Km ricarica la pagina");
} else {

    const numKm = parseInt(numKmStr);


    const ageStr = prompt("Età del passeggero");

    if (isNaN(ageStr) === true) {
        alert("Devi inserire un valore numerico per il campo età ricarica la pagina");
    } else {

        const age = parseInt(ageStr);

        console.log(numKm, age);


        /* PROCESSO LOGICO:
        
        1. calcolare il prezzo del bliglietto in base al num. di km (0.21 € al km)
        2. se sono minorenni applicare uno sconto del 20%
        3. se sono over 65 applicare uno sconto del 40%
        */

        const ticketPrice = numKm * 0.21;

        console.log(ticketPrice);

        let finalPrice;

        if (age < 18) {
            finalPrice = ticketPrice - (ticketPrice * 20) / 100;
        } else if (age >= 65) {
            finalPrice = ticketPrice - (ticketPrice * 40) / 100;
        } else {
            finalPrice = ticketPrice;
        }


        /* STAMPA RISULTATO:
        
        1. stampare il risultato con dude cifre decimali 
        */

        console.log(`Il prezzo del bliglietto è: ${finalPrice.toFixed(2)}`);
    }
}