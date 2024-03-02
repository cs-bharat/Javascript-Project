let gameSeq = [];
let userSeq = [];
let butns = ["green" , "violet" , "blue" , "darkpink"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

// any key press on keyboard than game started //
document.addEventListener("keypress", function(){
  // game only one time started than
  if(started == false){
    console.log("game is started!");
    started = true;
  }
  levelUp();
});

// flash button and level up - game flashh karva raha he
function gameflash(btn){
    btn.classList.add("flash");
    // kuch time ke liye button flash kare
    setTimeout(function(){
       btn.classList.remove("flash");
    },400);
}

 // userflash button than - green color // 
function userflash(btn){
    btn.classList.add("userflash");
    // kuch time ke liye button flash kare
    setTimeout(function(){
       btn.classList.remove("userflash");
    },400);
}

// level up function //
function levelUp(){
  userSeq = [];
  level++; // 0 -> 1 
  h3.innerText = `Level ${level}`; // Level 1
//   random button flash hoo
let randIndx = Math.floor(Math.random() *3); // 0 se 3 hi index he es liye
let randColor = butns[randIndx]; // randcolor ko store kiya
let randBtn = document.querySelector(`.${randColor}`); // btn sugee karenge random
// console.log(randIndx);
// console.log(randColor);
// console.log(randBtn);
gameSeq.push(randColor);  // gameSeq me add random color 
console.log(gameSeq);
  gameflash(randBtn);
}


//  answer checking function //
function checkAns(idx){
  // console.log("curr level:" , level); 

  if(userSeq[idx] === gameSeq[idx]){
    // console.log("some value");
    if(userSeq.length == gameSeq.length){
     setTimeout(levelUp , 1000);
    }
  }else{
    h3.innerHTML = `Game over! your score was <b>${level}</b> <br>please try again!! press any key on keyboard.`;
    // innerText ki jagah innerHtml es liye uesd kiya kiyu ki text me tag nhi likh saktee
    document.querySelector("body").style.backgroundColor= "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor= "white";
    },350);
    reset();
  }
}

// button event listener ,,pressbutton function // 
function btnpress(){
    // console.log("button was press");
    // console.log(this); // this - se button find hoga ki konsa button press hua he
    let btn = this;
    userflash(btn);
    userColor =btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

//  all button ko access karna he //
let allBtns = document.querySelectorAll(".btn"); // All aygaaa..
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
}

// reset function //
function reset(){
  started = false;
  gameSeq =[];
  userSeq =[];
  level =0;
}