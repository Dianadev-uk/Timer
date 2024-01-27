
let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;

function twoDigits(digit) {  //this function is to keep the watch with 2 digits always
    if (digit < 10) {
        return ('0' + digit);
    } else {
        return (digit);
    }
};

function startButton() {
    watch()     //call the function to the clock starts immediatelly, not waiting 1 second
   interval = setInterval(watch, 1000)
};

function pauseButton() {
   clearInterval(interval)
};

function stopButton() {
    clearInterval(interval)
    seconds = 0;
    minutes = 0;
    document.getElementById('watch-id').innerText = '00:00:00';
};

function watch() {
    seconds++
    if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('watch-id').innerText = twoDigits(hours) + ':' + twoDigits(minutes) + ':' + twoDigits(seconds);
    
};