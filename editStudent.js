const form = document.getElementById('form');
const ID = document.getElementById('ID');
const address = document.getElementById('address');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidPhoneNumber = phoneNumber => {
    const regex = /^(\+)?(\d{1,2})?(\s)?((\d{3})|(\(\d{3}\)))?(\s|-)?(\d{3})(\s|-)?(\d{4})$/;
    return regex.test(phoneNumber);
  }

const hasOnlyDigits = str => {
    const regex = /^\d+$/;
    return regex.test(str);
  }
form.addEventListener('submit', e=>{

    e.preventDefault();

    const idValue = ID.value.trim();
    const addressValue = address.value.trim();
    const phoneValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();

    if(addressValue === ""){
        alert("Address is required");
        address.focus();
        return false;
    }

    if(emailValue === ""){
        alert("Email is required");
        email.focus();
        return false;

    }

    if(!isValidEmail(emailValue)){
        alert("Enter a valid email");
        email.focus();
        return false;
    }
    if(phoneValue === ""){
        alert("Phone Number is required");
        phoneNumber.focus();
        return false;
    }
    if(!isValidPhoneNumber(phoneValue)){
        alert('Enter a valid phone number');
        phoneNumber.focus();
        return false;
    }
    if(idValue === ""){
        alert("ID is required");
        ID.focus();
        return false;
    }
    if(!hasOnlyDigits(idValue) || idValue.length < 8 || idValue.length > 20){
        alert('Enter a valid ID');
        idValue.focus();
        return false;
    }
    return true;

    
    
});

