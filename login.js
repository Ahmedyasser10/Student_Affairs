const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.querySelector("form");
const pass1errorMessage = document.getElementById("pass1errorMessage");
const pass2errorMessage = document.getElementById("pass2errorMessage");
const usererrorMessage = document.getElementById("usererrorMessage");

form.addEventListener("submit", (e) => {

    if(username.value.trim() === ""){
        e.preventDefault();
        usererrorMessage.toggleAttribute('hidden');
    }
    if(password.value.length < 8){
        e.preventDefault();
        pass1errorMessage.toggleAttribute('hidden');
    }
    if(password.value.length > 15){
        e.preventDefault();
        pass2errorMessage.toggleAttribute('hidden');
    }

})
