let btn=document.getElementById('btn')
let div=document.getElementById("box")


btn.addEventListener("click",()=>{
    let randomNumber=Math.floor(Math.random()*6)+1;
    console.log(randomNumber)
    div.textContent=randomNumber;
})