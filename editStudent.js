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

    event.preventDefault();

    if (ID.value === "" || email.value === "" || studentName.value === "" || phoneNumber.value === "" || address.value === "" || level.value === "") {
        alert('Data is not compelete');
        return false;
    }
    if (!hasOnlyDigits(ID.value) || ID.value.length < 5 || ID.value.length > 20) {
        alert('Enter a valid ID contains only numbers between 5 and 20 in length');
        return false;
    }
    if (!isValidEmail(email.value)) {
        alert('Enter a valid email');
        return fasle;
    }
    if (!isValidPhoneNumber(phoneNumber.value)) {
        alert('Enter a Valid phone number');
        return false;
    }
    if (!isValidName(studentName.value)) {
        alert('Enter a valid Name contains only characters separated by space');
        return false;
    }
    if (level.value < 1 || level.value > 4) {
        alert('Enter a valid level between 1 and 4');
        return false;
    }
    if (gpa.value < 1 || gpa.value > 4) {
        alert('Enter a valid GPA between 1 and 4');
        return false;
    }
    let flag = 0;
    for (let i = 0; i < localStorage.length; ++i) {

        let k = localStorage.key(i);
        let x = JSON.parse(localStorage.getItem(k));

        if (x.type === 1) { // check if the current Registerer is a Student
            continue;
        }
        if (ID.value === x.id) {
            flag = 1;
            key = k;
        }

        if (email.value === x.email && ID.value !== x.id) {

            alert('Email is already used');
            return false;
        }
        if (phoneNumber.value === x.phone && ID.value !== x.id) {
            alert('Phone number is already used');
            return false;
        }


    }

    if (!flag) {
        alert('Stuend is not found');
        return false;
    } else {
        let last = JSON.parse(localStorage.getItem(key)) ;
        let update = new Student(ID.value, studentName.value, phoneNumber.value, email.value, address.value, level.value, gpa.value, 0 , last.depart );
        localStorage.setItem(key, JSON.stringify(update));
        alert('Student\'s information has been edit successfully');
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
