const btnAudio = document.querySelector('#btnAudio');
btnAudio.addEventListener('click', ()=> {
    document.querySelector('#player').play();
})
const btnAudioPause = document.querySelector('#btnAudioPause');
btnAudioPause.addEventListener('click', ()=> {
    document.querySelector('#player').pause();
})

let timerOne = 10;
let amountTimerOne = timerOne*60;
let timerTwo = 1;
let amountTimerTwo = timerTwo*60;

let timeId;
let timeIdRest;

function fundSolution() {
    if(!timeId) {
        timeId = setInterval(calculateTime,1000)
    }
}
function stopTimerWork () {
    clearInterval(timeId);
}
function stopTimerRest() {
    clearInterval(timeIdRest);
}

function calculateTime () {
    const workTimer = document.querySelector("#workTimer");
    let minutes = Math.floor(amountTimerOne/60);
    let seconds = amountTimerOne%60;
        if (seconds < 10) {
        seconds = "0" + seconds;
        }
        workTimer.textContent = `${minutes} : ${seconds}`;
        amountTimerOne--;

        if (amountTimerOne < 0) {
        stopTimerWork();
        amountTimerOne = 0;
        fundSolutionTwo();
        }   
    
        function fundSolutionTwo() {
            timeIdRest = setInterval(calculatePause, 1000);
        }
    function calculatePause () {
            const restTimer = document.querySelector("#restTimer");
            let minutesRest = Math.floor(amountTimerTwo/60);
            let secondsRest = amountTimerTwo%60;
            if (secondsRest < 10) {
                secondsRest = "0" + secondsRest;
            }
            restTimer.textContent = `${minutesRest} : ${secondsRest}`;
            amountTimerTwo--;

            if (amountTimerTwo < 0) {
                stopTimerRest();
            amountTimerTwo = 0;
            }
    }
}

document.getElementById("start").addEventListener("click", fundSolution);
