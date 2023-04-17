const ID = document.getElementById("id");
const studentName = document.getElementById("name");
const phoneNumber = document.getElementById("number");
const email = document.getElementById("email");
const address = document.getElementById("address");
const level = document.getElementById("level");
const date = document.getElementById("date");
const button = document.getElementById("edit");

class Student {
    constructor(id, name, phone, email, address, level, date, type) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.level = level;
        this.date = date;
        this.type = type;
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
    const regex = /^\d+$/;
    return regex.test(str);
}
function isValidName(name) {
    const nameRegex = /^[a-zA-Z]{5,20}$/; // matches only characters between 5 and 20 in length
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
        alert('Enter a valid Name contains only characters between 5 and 20 in length');
        return false;
    }
    if (level.value < 1 || level.value > 4) {
        alert('Enter a valid level between 1 and 4');
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
        alert('User not found');
        return false;
    } else {
        localStorage.removeItem(key);
        let update = new Student(ID.value, studentName.value, phoneNumber.value, email.value, address.value, level.value, date.value, 0);
        localStorage.setItem(key, JSON.stringify(update));
    }

});


