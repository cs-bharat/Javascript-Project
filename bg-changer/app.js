let button = document.querySelectorAll(".button");
let body = document.querySelector("body");

button.forEach((button) => {  // arrow function 
   button.addEventListener("click",(e) => {
     if(e.target.id != null){
      if(e.target.id === "green"){
        body.style.color = "white";
        body.style.backgroundColor = "#18f5a5";

      }else if(e.target.id === "violet"){
         body.style.color = "white";
         body.style.backgroundColor = "#18eef5";
      }
      else if(e.target.id === "blue"){
        body.style.color = "#000"; // text color black
        body.style.backgroundColor = " #1844f5";
     }
     else if(e.target.id === "yellow"){
        body.style.color = "#000"; // text color black
        body.style.backgroundColor = "#f5d018";
     }
     else if(e.target.id === "jablin"){
        body.style.color = "white";
        body.style.backgroundColor = "#b318f5";
     }
     else if(e.target.id === "orange"){
        body.style.color = "white";
        body.style.backgroundColor = "#f56218";
     }
    }
   });
});