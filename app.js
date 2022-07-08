const timer = document.getElementById('stopwatch');

let hours = 0;
let minutes = 0;
let seconds = 0;
let stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        seconds = Number(seconds);
        minutes = Number(minutes);
        hours = Number(hours);

        seconds = seconds + 1;

        if (seconds == 60) {
            minutes = minutes + 1;
            seconds = 0;
        }
        if (minutes == 60) {
            hours = hours + 1;
            minutes = 0;
            seconds = 0;
        }

        if (seconds < 10 || seconds == 0) {
            seconds = '0' + seconds;
        }
        if (minutes < 10 || minutes == 0) {
            minutes = '0' + minutes;
        }
        if (hours < 10 || hours == 0) {
            hours = '0' + hours;
        }

        timer.innerHTML = hours + ':' + minutes + ':' + seconds;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hours = 0;
    seconds = 0;
    minutes = 0;
}
