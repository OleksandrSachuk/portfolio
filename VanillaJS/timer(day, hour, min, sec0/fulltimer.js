var sec = 7000;

//get days, hours, minutes, seconds
var days = Math.floor(sec / 60 / 60 / 24);
sec -= days * 24 * 60 * 60;
var hours = Math.floor(sec / 60 / 60);
sec -= hours * 60 * 60;
var min = Math.floor(sec / 60);
sec -= min * 60;

function startTimer() {
    if (sec == 0) {
        if (min == 0) {
            if (hours == 0) {
                if (days == 0) {
                    return;
                }
                days--;
                hours = 24;
                if (days < 10) days = "0" + days;
            }
            hours--;
            min = 60;
            if (hours < 10) hours = "0" + hours;
        }
        min--;
        if (min < 10) min = "0" + min;
        sec = 60;
    }
    else sec--;
    if (sec < 10) sec = "0" + sec;
    document.querySelector('.clock-days').innerHTML= days + ":";
    document.querySelector('.clock-hours').innerHTML = hours + ":";
    document.querySelector('.clock-minutes').innerHTML = days + ":";
    document.querySelector('.clock-seconds').innerHTML = sec;
    setTimeout(startTimer, 1000);
}
startTimer();