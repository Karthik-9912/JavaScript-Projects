let images=[
    './images/anime-city.jpg',
    './images/anime-boy.jpg',
    './images/anime-girl.jpg',
    './images/anime-ghost.jpg'
]

let index=0;

let img=document.getElementById("image")
let nextBtn=document.getElementById("next")
let prevBtn=document.getElementById("prev")

nextBtn.addEventListener('click',()=>{
    index++
    if(index>=images.length){
        index=0; 
    }
    img.src=images[index]
    
})

prevBtn.addEventListener('click',()=>{
    index--
    if(index<0){
        index=images.length-1;  
    }
    img.src=images[index]
    
})
