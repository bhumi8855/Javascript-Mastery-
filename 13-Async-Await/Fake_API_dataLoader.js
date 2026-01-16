function fetchUser(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("User Profile Loaded");
        },2000);
    });
}

async function loadUser() {
    console.log("Loading...");
    let data=await fetchUser();
    console.log(data);
}
loadUser();