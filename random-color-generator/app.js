let btn = document.querySelector("button");

// addEventListener(event , callback)//
btn.addEventListener("click" , function(){
   let cols = document.querySelector("#cols");  // cols id select ki he (p) tag ki
   let randomcolor = getRandomColor();  // call getrandomcolor ko 
   cols.innerText = randomcolor; // assign value
 
  // background changed//
   let body = document.querySelector("body");
   body.style.backgroundColor = randomcolor;
   console.log("color updated");  
});

// rendom rgb color generate  function //
function getRandomColor(){ 

let red = Math.floor(Math.random() * 255); // 0 to 255 
let green = Math.floor(Math.random() * 255); // 0 to 255 
let blue = Math.floor(Math.random() * 255); // 0 to 255

let color = `rgb(${red} , ${green} , ${blue})`;
return color;
}