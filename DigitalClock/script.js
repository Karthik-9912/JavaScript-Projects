
function setTime(){  

    setInterval(() => {
        let currentTime=new Date()
        let currentHour = currentTime.getHours()
        let currentMin = currentTime.getMinutes()
        let currentSec = currentTime.getSeconds()

        document.getElementById("sec").innerText=currentSec
        document.getElementById("hour").innerText=currentHour
        document.getElementById("min").innerText=currentMin
    }, 1000);
}
setTime()


