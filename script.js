const display = document.querySelector('.counter');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const lap = document.querySelector('#lap');
const displayLap = document.querySelector('.lap');

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval=null;
let h ,m,s,ms;

function counting(){
    miliseconds++;
    if(miliseconds==100){
        miliseconds = 0;
        seconds++;
    if(seconds==60){
        seconds = 0;
        minutes++;
        if(minutes==60){
            minutes = 0;
            hours++;
        }
    }
    }
        h = hours<10?"0"+hours : hours;
        m = minutes<10?"0"+minutes:minutes;
        s = seconds<10?"0"+seconds:seconds;
        ms = miliseconds<10?"0"+miliseconds:miliseconds;
    display.innerHTML = h +":"+ m +":"+ s +":"+ ms;
}
play.addEventListener("click",()=>{
    if(interval!==null){
        clearInterval(interval);
    }
    interval = setInterval(counting,10);
});

stop.addEventListener("click",()=>{
    clearInterval(interval);
});
reset.addEventListener("click",()=>{
    clearInterval(interval);
    display.innerHTML = "00:00:00:00";
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    displayLap.innerHTML = "";
    count = 1;
});
let count = 1;
lap.addEventListener("click",()=>{
    let l = document.createElement("p");
    l = `Lap${count}---${h}:${m}:${s}:${ms}   `;
    displayLap.append(l);
    
    count++;
});

