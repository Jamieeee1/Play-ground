//for seconds only

// const test ='15'
// let s = parseInt(test)

// function countdown(){
//     s -= 1
//     console.log(s)
// }

// function start() {
//     setInterval(countdown, 1000)
// }

// start()

// for minutes and seconds

let m = 2
let s = 0
function start () {
    
    if (m||s) {

        if(m) {
           // m-=1
           if(m&&s) {
               console.log("Current M: "+m);
           } else if (m>1){
                console.log("Current M: "+m);
           }
            if (s){
                s -= 1
                console.log("Current s:" + s)
                if (s==0) {
                    m -= 1
                    if(m==0) {
                        s = 59
                        console.log("Current s:" + s)
                    } else {
                        console.log("Current M: "+m)
                    }
                    
                };
            } else {
                m -= 1
                s = 60
                s -= 1
                console.log("Current s:" + s)
            }
        }
        else if (!m) {
            console.log("Current M: "+m)
            if(s) {
                s-=1 
                console.log("Current s:" + s)
            }
        }
    }
}

function countdown () {
    if (!m && !s) {
        console.log("input time")
    } else {
        setInterval(start, 1000)
    } 
}

countdown()

