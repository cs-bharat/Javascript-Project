let url = "https://catfact.ninja/fact";


let btn = document.querySelector("button");
btn.addEventListener("click" , async ()=>{
    let fact = await getFacts();
    // console.log(fact); 
    // paragraph me fact print ho
    let p = document.querySelector("#result");
    p.innerText = fact;
       
})

// async and await ka use karke data access karna he
async function getFacts(){
    try{
        let res = await axios.get(url);  // axios- aak liabrey he to cdn link html me add hogii
        return res.data.fact ; // data-fact print ho jaygaa
        

    }catch(e){
       console.log("Error -",e);
       return "No fact Found!!";
    }
}