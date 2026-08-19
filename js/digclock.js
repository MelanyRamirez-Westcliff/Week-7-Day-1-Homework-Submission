/* Clock */

function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    var utchr = d.getUTCHours();
    var timeDiff;
    var adjTimeDiff;
    var timeZone;

    if (utchr > 12) {
        utchr -= 12;
    }

    timeDiff = utchr - hr;

    if (timeDiff < 0) {
        adjTimeDiff = timeDiff + 12;
    } else {
        adjTimeDiff = timeDiff;
    }

    if (adjTimeDiff == 8) {
        timeZone = "PT";
    } else if (adjTimeDiff == 7) {
        timeZone = "MT";
    } else if (adjTimeDiff == 6) {
        timeZone = "CT";
    } else if (adjTimeDiff == 5) {
        timeZone = "ET";
    } else {
        timeZone = "Outside of US";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    document.getElementById("clock").innerText = time;
}

currentTime();
setInterval(currentTime, 1000);