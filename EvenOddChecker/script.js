
let div=document.getElementById("d1")
const btn=document.getElementById("btn")
let inp=document.getElementById('inp')

btn.addEventListener("click",()=>{

    let input=Number(inp.value);

    if(input%2==0){
        div.innerHTML="Even Number"
    }
    else if(input===0){
        div.innerHTML="Zero"
    }
    else{
        div.innerHTML="Odd Number"
    }

    inp.value=''
    
})
