let btn=document.getElementById("btn")
let res=document.getElementById("res")

function generateRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
        
btn.addEventListener("click",()=>{
    res.innerHTML=generateRandom(50,200);
})