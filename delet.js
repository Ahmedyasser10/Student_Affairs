const Fullname = document.getElementById("fullname");
const ID = document.getElementById("id");
const Level = document.getElementById("level");
const departmentSelect = document.querySelector('select');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    let nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    let idRegex = /^\d{8}$/;

    if (!idRegex.test(ID.value)) {
        alert("Invalid ID");
        return false;
    }
    if (!nameRegex.test(Fullname.value)) {
        alert("invalid Name");
        return false;
    }
    if ((Level.value <= 2) && (departmentSelect.value !== "General")) {
        alert("this student can't be in a depatment");
        return false;

    }
    if ((Level.value > 2) && (departmentSelect.value === "General")) {
        alert("this student must have depatment");
        return false;
    }

    let flag = false;
    for (let i = 0; i < localStorage.length; i++) {
        let k = localStorage.key(i);
        let x = JSON.parse(localStorage.getItem(k));
        if (x.type === 1) {
            continue;
        }
        if (x.id === ID.value && x.name === Fullname.value && x.level === Level.value) {
            flag = true;
            localStorage.removeItem(k);
            break;
        }
    }

    if (!flag) {
        console.log("no\n")
        alert("This student is not found.");
        return false;
    }
    else {
        alert("student is deleted");
    }


});
