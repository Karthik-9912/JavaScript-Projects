let inp1=document.getElementById("inp1")
let inp2=document.getElementById("inp2")
let div=document.getElementById("display")
let btn=document.getElementById("btn")
let person=document.getElementById('person')

btn.addEventListener("click",()=>{
    let input1=Number(inp1.value)
    let input2=Number(inp2.value)
    let persons=5
    let total=input1+input2
    div.innerHTML="Total = "+ total
    let per_person=total/persons
    person.innerHTML="Per Person = "+per_person
})
