
// fetch('https://api.github.com/users/cs-bharat')
//   .then((res) => res.json())
//   .then(data => {
//     userData = data
//   })
//   .catch(error => console.log(error));


const avtarUrl = document.querySelector('#user-image');
const myName = document.querySelector('#name');
const myIntro = document.querySelector('#my-intro');
const followers = document.querySelector('#followers');
const following = document.querySelector('#following');
const repos      = document.querySelector('#repo');

// custom function to fetch data from api using fetch function //
async function fetchData () {
    let userdata;
    try {
       const res =  await fetch('https://api.github.com/users/cs-bharat');
       if(res.ok) {
           const data = await res.json();
           if(data) {
            userdata =  await data;
           }
       }
       return userdata;   
    } catch (error) {
        console.log(error)
        return null
    }    
}


fetchData()
.then(data => {
    const {avatar_url, login, location , bio,followers_url , following_url , repos_url } = data;
    avtarUrl.setAttribute('src' , `${avatar_url}`);  
    myName.innerText = login;
    myIntro.innerText = bio;
    followers.setAttribute('src',`${followers_url}`);
    following.setAttribute('src',`${following_url}`);
    repos.setAttribute('src',`${repos_url}`);
    // following.innerHTML = following_url;
    // repos.innerHTML = repos_url;
})
.catch(err => console.log(err))
.finally(()=>console.log("me jaa raha hoo"))



// console.log(avtarUrl);


// console.log("Start");
// function sum2 (num) {
//     return num +2
// }


// async function sum (){
//     try {
//         let result = 0;
//          for(let i = 0; i< 10000000000; i++){
//              result = result + 2
//         }
//         return result
//     } catch (error) {
//         console.log("Error :: ", error)
//     }
// }

// console.log(sum2(5));
// sum().then(data => console.log(data));
// console.log(sum2(3));
// console.log("My answer is comming");
// console.log("End");