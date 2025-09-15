
let firstSelect=document.getElementById("sel1")
let secondSelect=document.getElementById("sel2")

let div=document.getElementById("d1")

let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    let input=document.getElementById("inp").value;
    let num=Number(input)

    let from=firstSelect.value.toLowerCase()
    let to=secondSelect.value.toLowerCase()

    if(from === 'celsius' && to === 'fahrenheit'){
        div.innerHTML=(num*9/5)+32 +"&degF"
    }
    
    else if(from === 'fahrenheit' && to === 'celsius'){
        div.innerHTML=(num-32)*5/9 +"&degC"
    }
    else if(from === 'km' && to === 'meters'){
        div.innerHTML=num*1000 + 'meters'
    }
    else if(from === 'meters' && to === 'km'){
        div.innerHTML=num/1000 + 'kms'
    }
    else{
        div.innerHTML="Select the proper options"
    }
    // to clear the input field
    input=document.getElementById("inp").value="";
})


