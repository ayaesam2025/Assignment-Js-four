let welcomeMsg= document.getElementById("welcomeMsg");
let logOutBtn= document.getElementById("logOutBtn");


window.addEventListener('load',function(){
 
    displayUserName();
})

function displayUserName(){

    if (localStorage.getItem("userName") !== null) {
        welcomeMsg.innerHTML = `Welcome ${localStorage.getItem("userName")}`;
        
    }else{
        welcomeMsg.innerHTML =``
    }

}
const logOut = () => {
    localStorage.removeItem("userName");
    welcomeMsg.innerHTML ="you are new logged out, redirecting to login ";
    setTimeout(()=>{
        window.location.href = '../sign up/index.html';
    },3000);
};
logOutBtn.addEventListener("click",logOut);
