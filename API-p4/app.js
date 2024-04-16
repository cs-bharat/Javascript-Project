// const URL = "https://randomfox.ca/floof/";
const URL = "https://randomfox.ca/?i=114";

// API request send using axios methods
async function randomFoxImage(){
    try{
     let response = await axios.get(URL);
     console.log(response);

    }catch(error){
      console.log("Error no fox image find " , error);
      return "no Fox image find";
    }
}
