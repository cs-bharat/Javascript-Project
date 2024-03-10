let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
btn.addEventListener("click" , async()=>{ // async and await used hogaa
  let link = await getImg();
  let img = document.querySelector("#result"); 
  img.setAttribute("src", link);
  console.log(link);
});

async function getImg(){
    try{
      let res = await axios.get(url);
      return res.data.message;
    }catch(error){
      return "Image not found";
    }
}