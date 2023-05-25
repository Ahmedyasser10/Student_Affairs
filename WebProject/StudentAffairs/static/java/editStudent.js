const ID = document.getElementById("id");
const studentName = document.getElementById("name");
const phoneNumber = document.getElementById("number");
const email = document.getElementById("email");
const address = document.getElementById("address");
const level = document.getElementById("level");
const gpa = document.getElementById("gpa");
const button = document.getElementById("edit");
const logOut = document.getElementById("logout");
const logOut2 = document.getElementById("logout2");


class Student {
    constructor(id, name, phone, email, address, level, gpa, type , depart) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.level = level;
        this.gpa = gpa;
        this.type = type;
        this.depart = depart ;
    }
}



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidPhoneNumber = phoneNumber => {
    const regex = /^(\+)?(\d{1,2})?(\s)?((\d{3})|(\(\d{3}\)))?(\s|-)?(\d{3})(\s|-)?(\d{4})$/;
    return regex.test(phoneNumber);
}

const hasOnlyDigits = str => {
    const regex = /^\d{8}$/;
    return regex.test(str);
}
function isValidName(name) {
    let nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    return nameRegex.test(name);
}


button.addEventListener('click', function (event) {
    let key;

    if (ID.value === "" || email.value === "" || studentName.value === "" || phoneNumber.value === "" || address.value === "" || level.value === "") {
        alert('Data is not compelete');
        event.preventDefault();
        return false;
    }
    if (!hasOnlyDigits(ID.value) || ID.value.length < 5 || ID.value.length > 20) {
        alert('Enter a valid ID contains only numbers between 5 and 20 in length');
        event.preventDefault();
        return false;
    }
    if (!isValidEmail(email.value)) {
        alert('Enter a valid email');
        event.preventDefault();
        return fasle;
    }
    if (!isValidPhoneNumber(phoneNumber.value)) {
        alert('Enter a Valid phone number');
        event.preventDefault();
        return false;
    }
    if (!isValidName(studentName.value)) {
        alert('Enter a valid Name contains only characters separated by space');
        event.preventDefault();
        return false;
    }
    if (level.value < 1 || level.value > 4) {
        alert('Enter a valid level between 1 and 4');
        event.preventDefault();
        return false;
    }
    if (gpa.value < 1 || gpa.value > 4) {
        alert('Enter a valid GPA between 1 and 4');
        event.preventDefault();
        return false;
    }
    
    
        


});


logOut.onclick = function () {
    for (i = 0; i < localStorage.length; i++) {
        let k = localStorage.key(i);
        if (JSON.parse(localStorage.getItem(k)).type === 0)
            continue;

        let x = JSON.parse(localStorage.getItem(k));
        if (x.logedin === 1) {
            x.logedin = 0;
            localStorage.setItem(k, JSON.stringify(x));
            break;
        }
    }
}

logOut2.onclick = function () {
    for (i = 0; i < localStorage.length; i++) {
        let k = localStorage.key(i);
        if (JSON.parse(localStorage.getItem(k)).type === 0)
            continue;

        let x = JSON.parse(localStorage.getItem(k));
        if (x.logedin === 1) {
            x.logedin = 0;
            localStorage.setItem(k, JSON.stringify(x));
            break;
        }
    }
}
