const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#facts");
const btn = document.querySelector("#btn");

// fetch me promise return hota he
const getFacts =  async ()=>{
    console.log("getting data...");
    let response  =  await fetch(URL);
    // api ya server se keval data lane ka kam 'GET' request karti he
    console.log(response);
    let data = await response.json();
    // console.log(data[2].text);
    factpara.innerText = data[0].text;

    // api ko request send karte he tab 1) response json me milta he or 2)
    //  js  object me usko convert karna padta he = json()
    
}

btn.addEventListener("click" ,getFacts);



// async/await se api calls ko exicute karenge . or seconde .then, .catch se bhi kar sakte he
