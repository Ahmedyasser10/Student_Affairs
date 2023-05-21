const ID = document.getElementById("id");
const studentName = document.getElementById("name");
const phoneNumber = document.getElementById("number");
const email = document.getElementById("email");
const address = document.getElementById("address");
const level = document.getElementById("level") ;
const date = document.getElementById("date") ;
const GPA = document.getElementById("GPA") ;
const departmentSelect = document.querySelector('select') ;
const button = document.getElementById("Register") ;
const logOut = document.getElementById("logout") ;
const logOut2 = document.getElementById("logout2") ;


class Student {
    constructor(id, name, phone, email, address, level, date, type, depart, gpa) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.level = level;
        this.date = date;
        this.type = type;
        this.depart = depart;
        this.gpa = gpa;
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

    /*
    validate data input here
    */
    event.preventDefault();

    if (ID.value === "" || email.value === "" || studentName.value === "" || phoneNumber.value === "" || address.value === "" || level.value === "" || GPA.value === "") {
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
        return false;
    }
    if ((level.value <= 2) && (departmentSelect.value !== "General")) {
        alert("this student can't be in a depatment");
        return false;

    }
    if ((level.value > 2) && (departmentSelect.value === "General")) {
        alert("this student must have depatment");
        return false;
    }

    for (let i = 0; i < localStorage.length; ++i) {
        let k = localStorage.key(i);
        let x = JSON.parse(localStorage.getItem(k));
        if (x.type === 1) // check if the current Registerer is a Student
            continue;
        if (x.id === ID.value) {
            alert('ID is already used');
            return false;
        }
        if (x.email === email.value) {
            alert('email is already used');
            return false;
        }
        if (x.phone === phoneNumber.value) {
            alert('phone number is already used');
            return false;
        }

    }
    let s = new Student(ID.value, studentName.value, phoneNumber.value, email.value, address.value, level.value, date.value, 0, departmentSelect.value, GPA.value);
    localStorage.setItem( localStorage.length + 1, JSON.stringify(s));
    alert('A new student is successfuly added');

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
  