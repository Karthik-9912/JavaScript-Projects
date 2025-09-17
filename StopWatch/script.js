let startTime=document.getElementById('start')
let stopTime=document.getElementById("stop")
let resetTime=document.getElementById('reset')

let hour=0,min=0,sec=0,ms=0;
let interval; // to store the setinterval and use it for later

function getAllTime(){
    document.getElementById('hour').innerHTML=hour.toString().padStart(2,'0')
    document.getElementById('min').innerHTML=min.toString().padStart(2,'0')
    document.getElementById('sec').innerHTML=sec.toString().padStart(2,'0')
    document.getElementById('ms').innerHTML=ms.toString().padStart(2,'0')
}

function stopWatch(){
    interval = setInterval(() => {
        ms++
        if(ms===100){
            ms=0
            sec++
        }
        if(sec===60){
        sec=0
        min++
        }
        if(min===60){
            min=0
            hour++
        }
        getAllTime()
    }, 10);
}

startTime.addEventListener("click",()=>{
    clearInterval(interval)
    stopWatch()
})

stopTime.addEventListener("click",()=>{
    clearInterval(interval)
})

resetTime.addEventListener('click',()=>{
    clearInterval(interval)
    hour=0,min=0,sec=0,ms=0
    getAllTime()
})