
// fetch('https://api.github.com/users/cs-bharat')
//   .then((res) => res.json())
//   .then(data => {
//     userData = data
//   })
//   .catch(error => console.log(error));


const avtarUrl = document.querySelector('#user-image');
const myName = document.querySelector('#name');
const myIntro = document.querySelector('#my-intro');
const followersx = document.querySelector('#followers');
const followingx = document.querySelector('#following');
const reposx      = document.querySelector('#repo');

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
    const {avatar_url, login, location , bio ,followers , following , public_repos} = data;
    avtarUrl.setAttribute('src' , `${avatar_url}`);  
    myName.innerText = login;
    myIntro.innerText = bio;
    // followers.setAttribute('src',`${followers_url}`);
    // following.setAttribute('src',`${following_url}`);
    // repos.setAttribute('src',`${repos_url}`);
    followersx.innerText = followers;
    followingx.innerHTML = following;
    reposx.innerHTML = public_repos;
})
.catch(err => console.log(err))
.finally(()=>console.log("me jaa raha hoo"))



// console.log(avtarUrl);


