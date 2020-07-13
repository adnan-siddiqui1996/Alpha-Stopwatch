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
document.getElementById('soundPause').style.visibility = "visible";
document.getElementById('timeLapse').disabled = true;
var a = true;
var count = 0;

var nHrs;
var nMins; 
var nSec;
var nMsec;

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
    document.getElementById('soundPlay').style.visibility = "hidden";
    document.getElementById('soundPause').style.visibility = "visible";
    a = true;
    sound.play();
}

function soundPause() {
    document.getElementById('soundPlay').style.visibility = "visible";
    document.getElementById('soundPause').style.visibility = "hidden";
    a = false;
    sound.pause();
}

function play() {
    document.getElementById('pause').style.visibility = "visible";
    document.getElementById('play').style.visibility = "hidden";
    document.getElementById('timeLapse').disabled = false;
    var animation = document.getElementById('outside');
    animation.style.animation = "spin 1s linear infinite";
    document.getElementById('pause').disabled = false;
    interval = setInterval(timer, 10)
}
function pause() {
    document.getElementById('pause').style.visibility = "hidden";
    document.getElementById('play').style.visibility = "visible";
    clearInterval(interval);
    var animation = document.getElementById('outside');
    animation.style.animation = ""; 
}
function reset() {    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    count = 0;
    document.getElementById('timeLapse').disabled = true;
    var div = document.getElementById('timeRecord');
    div.innerHTML = "";    
    div.style.overflowY = "hidden";
    document.getElementById('pause').style.visibility = "hidden";
    document.getElementById('play').style.visibility = "visible";
    document.getElementById('record').style.visibility = "hidden";
    document.getElementById('body1').style.overflowY = "hidden";
    clearInterval(interval);
    var animation = document.getElementById('outside');
    animation.style.animation = "";
    hrs = 00;
    mins = 00;
    sec = "00";
    msec = "00";
    hrsHeading.innerHTML = "";
    minsHeading.innerHTML = "";
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;    
}
function timeLapse() {
    document.getElementById('record').style.visibility = "visible";
    document.getElementById('body1').style.overflowY = "scroll";
    var div = document.getElementById('timeRecord');
    count++;
    if(count > 6) {
        div.style.overflowY = "Scroll";
    }
    if(count > 1) {
        nHrs = hrs - nHrs; 
        nMins = mins - nMins; 
        nSec = sec - nSec;
        nMsec = msec - nMsec;
    }
    else{
        nHrs = hrs; 
        nMins = mins; 
        nSec = sec;
        nMsec = msec;
    }
    var newItem = document.createElement("p");
    var textnode = document.createTextNode("#" + count + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + Math.abs(nHrs) + ":" + Math.abs(nMins) + ":" + Math.abs(nSec) + ":" + Math.abs(nMsec) + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + hrs + ":" + mins + ":" + sec + ":" + msec);
    newItem.appendChild(textnode);
    div.insertBefore(newItem, div.childNodes[0]);
    nHrs = hrs; 
    nMins = mins; 
    nSec = sec;
    nMsec = msec;
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }