let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let guest = document.getElementById("guest")
let home = document.getElementById("home")
let periodEl = document.getElementById("period-el")
let timer = document.getElementById("timer")
let overTimeCount = 1
let homeCount = 0;
let guestCount = 0; 
// console.log(initialSeconds)
runGameTime()

function runGameTime() {
    let periodCount = 1;
    let minutes = 0
    let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now
    let initialSeconds = Math.floor((distance % (1000 * 60)) / 1000)
    let x = setInterval(function() {
    now = new Date().getTime();
    distance = countDownDate - now
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    if (seconds > initialSeconds) {
        // console.log("hello " + seconds)
        seconds -= initialSeconds
    } else {
        seconds += (60 - initialSeconds)
        if (seconds == 60) {
            seconds = 0
        }
        // console.log("Hi" + seconds)
    } 
    // console.log("" + minutes + seconds)
    if (minutes < 10) {
        document.getElementById("timer").innerHTML = "0" + minutes
    } else {
      document.getElementById("timer").innerHTML = minutes  
    }
    if (seconds < 10) {
        document.getElementById("timer").innerHTML += ":0" + seconds ;   
    } else {
        document.getElementById("timer").innerHTML += ":" + seconds ;   
    }
    if (minutes == 0 && seconds == 0) {
        // console.log("hi" + periodCount)
        if (periodCount > 0) {
            // console.log("heylo" + periodCount)
            clearInterval(x)
            console.log(guestCount)
            console.log(homeCount)
            endgame()
            
        } else {
            // console.log("Hello")
            minutes = 0
            addToPeriod()

        }
    } else if (seconds == 0) {
        // console.log("Hi")
        minutes--
        
    }
    

} , 1000) 
    
}



function add1ToHome() {
    homeCount ++
    homeScore.innerText = homeCount
    checkLeader()
    
}

function add2ToHome() {
    homeCount += 2
    homeScore.innerText = homeCount
    checkLeader()
    
}

function add3ToHome() {
    homeCount += 3
    homeScore.innerText = homeCount
    checkLeader()
    
}

function add1ToGuest() {
    guestCount ++
    guestScore.innerText = guestCount
    checkLeader()
    
}

function add2ToGuest() {
    guestCount += 2
    guestScore.innerText = guestCount
    checkLeader()
    
}

function add3ToGuest() {
    guestCount +=  3
    guestScore.innerText = guestCount
    checkLeader()
    
}

function resetScores() {
    guestCount = 0
    homeCount = 0
    guestScore.innerText = guestCount
    homeScore.innerText = homeCount
    guest.style.backgroundColor = "#1B244A"
    home.style.backgroundColor = "#1B244A"
    timer.style.border = "none"
    overTimeCount = 1
    runGameTime()
    
}

function checkLeader() {
    if (guestCount > homeCount) {
        guest.style.backgroundColor = "#F59E0B"
        home.style.backgroundColor = "#1B244A"
        
    } else if (homeCount > guestCount){
        home.style.backgroundColor = "#F59E0B"
        guest.style.backgroundColor = "#1B244A"
        
    } else if (homeCount = guestCount) {
        guest.style.backgroundColor = "#1B244A"
        home.style.backgroundColor = "#1B244A"
    }
    
}

function getMinAndSec() {
    
}

function addToPeriod () {
    periodEl.innerText++
    periodCount++
}

function endgame() {
    console.log("hi")
    timer.style.border = " 4px dashed #E50B0B"
    if (guestCount > homeCount) {
        guest.style.backgroundColor = "#08A835"
        home.style.backgroundColor = "#1B244A"
        
    } else if (homeCount > guestCount){
        home.style.backgroundColor = "#08A835"
        guest.style.backgroundColor = "#1B244A"
        
    } else if (homeCount = guestCount) {
        guest.style.backgroundColor = "#1B244A"
        home.style.backgroundColor = "#1B244A"
        overtime()
        overTimeCount++
    }
    
}

function runOverTime() {
    let periodCount = 1;
    let minutes = 0
    let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now
    let initialSeconds = Math.floor((distance % (1000 * 60)) / 1000)
    let x = setInterval(function() {
    now = new Date().getTime();
    distance = countDownDate - now
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    if (seconds > initialSeconds) {
        // console.log("hello " + seconds)
        seconds -= initialSeconds
    } else {
        seconds += (60 - initialSeconds)
        if (seconds == 60) {
            seconds = 0
        }
        // console.log("Hi" + seconds)
    } 
    // console.log("" + minutes + seconds)
    if (minutes < 10) {
        document.getElementById("timer").innerHTML = "0" + minutes
    } else {
      document.getElementById("timer").innerHTML = minutes  
    }
    if (seconds < 10) {
        document.getElementById("timer").innerHTML += ":0" + seconds ;   
    } else {
        document.getElementById("timer").innerHTML += ":" + seconds ;   
    }
    if (minutes == 0 && seconds == 0) {
        // console.log("hi" + periodCount)
        if (periodCount > 0) {
            // console.log("heylo" + periodCount)
            clearInterval(x)
            endgame()
            
        } else {
            // console.log("Hello")
            minutes = 0
            addToPeriod()

        }
    } else if (seconds == 0) {
        // console.log("Hi")
        minutes--
        
    }
    

} , 1000) 
    
}


function overtime() {
    timer.style.border = "none"
    periodEl.innerText = "OT" + overTimeCount
    runOverTime()
    
}