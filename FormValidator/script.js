let email=document.querySelector("#mail")
let pswd=document.querySelector("#pswd")
let btn=document.getElementById("btn")
let div=document.getElementById('div')


btn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    const mail=email.value
    const password=pswd.value

    const validMail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const strongPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*]).{8,}$/;
    
    if(!validMail.test(mail)){
        div.innerText="Please enter a valid email"
    }
    else{
        if(!strongPassword.test(password)){
        div.style.color="red"
        div.innerText="Password should be 8 letters and One Uppercase , One Lowercase, One special Character"
        }
        else{
        div.innerText='Congratulations You have Successfully registered';
        div.style.color="green";
        alert("Password is Valid")
        
        pswd.value=""
        mail.value=""
    }
    }
})