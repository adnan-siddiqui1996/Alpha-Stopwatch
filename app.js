var hrs = 00;
var mins = 00;
var sec = "00";
var msec = 00;
var hrsHeading = document.getElementById('hours');
var minsHeading = document.getElementById('mins');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var interval;
var sound = new Audio('Ticking.mp3');
document.getElementById('pause').disabled = true;
document.getElementById('soundPlay').disabled = true;
document.getElementById('soundPause').disabled = false;
var a = true;

function timer() {
    msec++;
    if (msec === 99){
        if (a === true)
            soundPlay();
        else if (a === false)
            soundPause();
    }
    if (msec < 10) {
        msec = '0' + msec.toString();
    }
    msecHeading.innerHTML = msec;
    if (sec === 0)
        secHeading.innerHTML =  "00";
    if (msec >= 99) {
        msec = 00;
        sec++;
        if (sec < 10) {
            sec = '0' + sec.toString();
        }
        secHeading.innerHTML = sec;
    }
    else if (sec >= 60) {
        sec = 00;
        mins++;
        if (mins < 10) {
            mins = '0' + mins.toString();
        }
        minsHeading.innerHTML = mins + ':';
    }
    else if (mins >= 60) {
        mins = 00;
        if (mins == 0)
            minsHeading.innerHTML =  "00:";
        hrs++;
        if (hrs < 10) {
            hrs = '0' + hrs.toString();
        }
        hrsHeading.innerHTML = hrs + ':';
    }
}

function soundPlay() {
    document.getElementById('soundPlay').disabled = true;
    document.getElementById('soundPause').disabled = false;
    a = true;
    sound.play();
}

function soundPause() {
    document.getElementById('soundPlay').disabled = false;
    document.getElementById('soundPause').disabled = true;
    a = false;
    sound.pause();
}

function play() {
    var animation = document.getElementById('outside');
    animation.style.animation = "spin 1s linear infinite";
    document.getElementById('play').disabled = true;
    document.getElementById('pause').disabled = false;
    interval = setInterval(timer, 10)
}
function pause() {
    clearInterval(interval);
    var animation = document.getElementById('outside');
    animation.style.animation = "";
    document.getElementById('play').disabled = false;
    document.getElementById('pause').disabled = true;
}
function reset() {
    clearInterval(interval);
    var animation = document.getElementById('outside');
    animation.style.animation = "";
    document.getElementById('play').disabled = false;
    document.getElementById('pause').disabled = true;
    hrs = 00;
    mins = 00;
    sec = "00";
    msec = "00";
    hrsHeading.innerHTML = "";
    minsHeading.innerHTML = "";
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;    
}