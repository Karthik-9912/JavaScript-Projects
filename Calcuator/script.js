const inp1=document.getElementById("inp1")
const inp2=document.getElementById("inp2")
const operand=document.getElementById("operand")
const btn=document.getElementById("btn")
let result=document.getElementById("result")

btn.addEventListener("click",()=>{
    let num1=Number(inp1.value);
    let num2=Number(inp2.value);
    let op=operand.value.trim();
    if(num1==="" || num2==="" || op===""){
        result.innerHTML="Must Enter the required fields"
    }
    switch (op){
        case "+":
            result.innerHTML=num1+num2;
            break
        case "-":
            result.innerHTML=num1-num2
            break
        case "*":
            result.innerHTML=num1*num2
            break
        case "/":
            result.innerHTML=num2!==0? num1/num2 : "Not Divisble by zero"
            break
        case "%":
            result.innerHTML=num1%num2
            break
    }
    
    // if(op==="+"){
    //     result.innerHTML=num1+num2;
    // }
    // else if(op==="-"){
    //     result.innerHTML=num1-num2;
    // }
    // else if(op==="*"){
    //     result.innerHTML=num1*num2;
    // }
    // else if(op==="/"){
    //     result.innerHTML=num1/num2;
    // }
    // else if(op==="%"){
    //     result.innerHTML=num1%num2;
    // }
    // else{
    //     result.innerHTML="Invalid Inputs";
    // }
})