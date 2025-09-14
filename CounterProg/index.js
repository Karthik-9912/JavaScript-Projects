const btn1=document.getElementById("plusBtn");
const btn2=document.getElementById("minusBtn");
const reset=document.getElementById("resetNum");
const d=document.getElementById("counter");

let count=0;
reset.addEventListener("click",()=>{
    count=0;
    d.textContent=count;
})

btn1.addEventListener('click',()=>{
    count++;
    d.textContent=count;
})

btn2.addEventListener("click",()=>{
    if(count>0){
        count--;
        d.textContent=count;
    }
})