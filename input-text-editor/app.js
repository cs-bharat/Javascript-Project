let inp = document.querySelector("input");
let p = document.querySelector("p");

inp.addEventListener("input" , function(){
   console.log(inp.value);
   p.innerText = inp.value;
   p.style.fontSize = "3rem";
});
