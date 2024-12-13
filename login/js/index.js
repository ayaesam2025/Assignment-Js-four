let registerForm = document.getElementById("registerForm");

let signName = document.getElementById("signName");
let signEmail = document.getElementById("signEmail");
let signPassword = document.getElementById("signPassword");


let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let existAlert = document.getElementById("existAlert");
let successAlert = document.getElementById("successAlert");


let allUsers = [];

if (localStorage.getItem("allUsers") !== null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
    
}

registerForm.addEventListener("submit",function(e){
    e.preventDefault();
    if(checkIfAllInputsAreValid()){
        console.log("user is add");
        addUser();
        
    } 

});


function addUser(){
    let newUser = {
        name: signName.value,
        email: signEmail.value,
        passwor: signPassword.value,
    };
if(isExist(newUser) == true){
    console.log("email is alredy exist");
    existAlert.classList.replace("d-none" , "d-block");
    successAlert.classList.replace("d-block" , "d-none");

}
else{
   
    console.log(newUser);
    allUsers.push(newUser);
    localStorage.setItem("allUsers" , JSON.stringify(allUsers));
    successAlert.classList.replace("d-none" , "d-block");
    existAlert.classList.replace("d-block" , "d-none");

    setTimeout(function(){
        window.location.href = '../sign in/login.html';
    } , 3000);
    
    console.log(allUsers);
    console.log("user is new");
    
    
    
}
}

function isExist(newUser){
    for (let i = 0; i < allUsers.length; i++) {
       if(allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()){
        console.log("email is already existed");
        return true;
       }
        
    }
}



function validateAllInputs(regex , element , alertMsg){
    let cartona = regex;
    
    if(cartona.test(element.value) ==true){
        console.log("valid");
        alertMsg.classList.replace("d-block","d-none");
        return true;
        
    } else{
        console.log("inValid");
        alertMsg.classList.replace("d-none","d-block");
        return false;
    }
}
function checkIfAllInputsAreValid(){
    if(validateAllInputs(/^[a-zA-Z]{2,}$/ , signName , nameAlert) &&
     validateAllInputs(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ , signEmail ,emailAlert) &&
      validateAllInputs(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , signPassword , passwordAlert))
        {
        console.log("all inputs are valid");
        return true;
    } else{
        console.log("!!!!");
        return false;
        
    }
        
  
}
   