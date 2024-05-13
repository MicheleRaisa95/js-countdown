'use strict'

const contoAllaRovescia = 10

//  funzione per avviare il countdown

function countdownVisibile() {
    const countdown = document.getElementById('countdown');

    let count = contoAllaRovescia;
    countdown.innerHTML = count;

    const  countdownInterval = setInterval(function() {
        count--;
        countdown.innerHTML = count;

        if (count < 0) {
            clearInterval(countdownInterval);
            countdown.innerHTML = 'Buon anno!'
        }
    }, 1000);
}

countdownVisibile()