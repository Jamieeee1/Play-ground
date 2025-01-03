const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

    let h = parseInt(hours.value);
    let m = parseInt(minutes.value);
    let s = JSON.parse(seconds.value)

function countdown() {
    s -= 1
    console.log(s)

    
    
    // if (h==0 && m == 0) {
    //     s -= 1
    // } else if (h==0) {
    //     if(s==0) {
    //         s = 60
    //     } else{
    //         s -= 1
    //     }
    // } else {
    //     if (s == 0) {
    //         s = 60
    //         while (s>0) {
    //             s -= 1
    //         } 
    //     }
    // }

}

function startTime () {
    if (seconds.value) {
        setInterval(countdown, 1000) 
    } else {
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

