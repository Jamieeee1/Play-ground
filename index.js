const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let timer = null

    
function countdown() {
    let s = parseInt(seconds.value)
    let m = parseInt(minutes.value);
    let h = parseFloat(hours.value);

    if (h||m||s) {

        if(s) {
            hours.value = h
            minutes.value = m
            s -= 1
            seconds.value = s
        } 
        else if(m) {
            hours.value = h
            m -= 1
            minutes.value = m
            s = 59
            seconds.value = s
        } 
        else if(h) {
            h -= 1
            hours.value = h
            m = 59
            minutes.value = m
            s = 59
            seconds.value = s
        }

    }
}

function startTime () {
    let s = parseInt(seconds.value)
    let m = parseInt(minutes.value);
    let h = parseFloat(hours.value);

    if (h||m||s) {
        if (timer !== null) {
            clearInterval(timer)
        }
        timer = setInterval(countdown, 1000) 
    } 
    else {
        window.alert("Input valid number of seconds")
    }
    document.getElementById('startbtn').innerText = 'Start'
}

function resetTime() {
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";    
    
    clearInterval(timer)
}

function pauseTime() {
    clearInterval(timer)
    document.getElementById('startbtn').innerText = 'Resume'
}

