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

let h = 1
let m = 2
let s = 7

function start () {
    //for minutes and seconds only
    // if (m||s) {

    //      if(s) {
    //         s-=1
    //         console.log("Current s:" + s)
    //     } else {
    //         m -= 1
    //         console.log("Current M: "+m);
    //         s = 59
    //         console.log("Current s:" + s)
    //     }
    // }


    //for 
    if (h||m||s) {
        if(s) {
            console.log("Current H: " + h)
            console.log("Current M: "+ m)
            s -= 1
            console.log("Current S: " + s)
        } else if(m) {
            console.log("Current H: " + h)
            m -= 1
            console.log("Current M: "+ m)
            s = 59
            console.log("Current S: " + s)
        } else if(h) {
            h -= 1
            console.log("Current H: " + h)
            m = 59
            console.log("Current M: " + m)
            s = 59
            console.log("Current S: " + s)
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

