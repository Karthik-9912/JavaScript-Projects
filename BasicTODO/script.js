let inp=document.getElementById("inp")

let div=document.getElementById('info')

let btn=document.getElementById("btn")
let btn1=document.getElementById("btn1")

function add(){
    btn.addEventListener('click',()=>{
        div.textContent+=inp.value + " ";
        inp.value=""
        btn1.style.display='block'
    })
}
add()
function del(){
    btn1.addEventListener("click",()=>{
        div.textContent=""
        btn1.style.display='none'
    })
}
del()