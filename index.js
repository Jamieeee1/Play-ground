const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let timer = null


    
function countdown() {
    let s = parseInt(seconds.value)
    let m = parseInt(minutes.value);
    let h = parseInt(hours.value);
    if(h>=0){

        if (m>=0) {

            if (s>0) {
                s = s-1
                if (s<10) {
                    seconds.value = "0"+s;
                } 
                else {
                    seconds.value = s;
                }  
            } 
            else if (s==0) {
                s = 60
                s = s-1
                if (s<10) {
                    seconds.value = "0"+s;
                } 
                else {
                    seconds.value = s;
                }  
            } 
        }
    }
    console.log(h)
    if (s>0) {
        s = s-1
        if (s<10) {
            seconds.value = "0"+s;
        } 
        else {
            seconds.value = s;
        }
        if(s==0) {
            window.alert("Time up")
        }     
    } 
    
    
}

function startTime () {
    if (seconds.value || minutes.value || hours.value) {
        timer = setInterval(countdown, 1000) 
    } 
    else {
        window.alert("Input valid number of seconds")
    }
}

function resetTime() {
    let h = hours.value;
    let m = minutes.value;
    let s = seconds.value;    
    
    
    console.log(h,m,s)
}


// let h = hours.value;
// let m = minutes.value;
// let s = seconds.value;

