let btn=document.getElementById("btn")

document.getElementById("btn").addEventListener("click", () => {
  let str = document.getElementById("inp").value.toLowerCase();
  let reversed = str.split("").reverse().join("");
  console.log(reversed);
});





