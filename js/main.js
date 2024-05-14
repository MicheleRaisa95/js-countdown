'use strict'

let contoAllaRovescia = 10;

// creo la funzione Timeout

/*setTimeout(function() {
    // inserisco allert
    alert('Buon anno!')
}, contoAllaRovescia * 1000

);*/

const clock = setInterval(function () {
    if (contoAllaRovescia === 0) {
        alert( 'Buon anno!');
        clearInterval(clock);
    } else {
        console.log(contoAllaRovescia);
        contoAllaRovescia--;
    }
}, 1000);