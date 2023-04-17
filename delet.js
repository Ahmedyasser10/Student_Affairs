
const fullname = document.querySelector("#fullname");
const password = document.querySelector("#password");
const ID = document.querySelector("#ID");
const confirmPassword = document.querySelector("#confirmPassword");
const selectElement1 = document.querySelector('#select1');
const selectElement2 = document.querySelector("#select2");



document.forms[0].onsubmit = function (event) {

    let nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    let idRegex = /^\d{8}$/;

    if (!nameRegex.test(fullname.value)) {
        alert("invalid Name");
        return false;

    }
    else if (!idRegex.test(ID.value)) {
        alert("invalid ID");
        return false;

    }
    else if (password.value.length < 8) {
        alert("Password should be at least 8 characters");
        return false;
    }
    else if (!(confirmPassword.value === password.value)) {
        alert("Password and confirm Password must be the same");
        return false;

    }
    else if ((selectElement1.value <= 2) && (selectElement2.value !== "General")) {
        alert("this student can't have depatment");
        return false;

    }
    else if ((selectElement1.value > 2) && (selectElement2.value === "General")) {
        alert("this student must have depatment");
        return false;
    }
    else
        return true;


}


