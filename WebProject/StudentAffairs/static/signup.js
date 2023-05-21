// Get the form element
const form = document.getElementById('login');

// Get the input fields
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmpass = document.querySelector('#confirmpass');
const phonenum = document.querySelector('#phonenum');
const NationalID = document.querySelector('#nid');
const date = document.querySelector('input[type="date"]');



class User {
  constructor(fullname, username, password, id, phonenumber, date, type) {
    this.username = username;
    this.password = password;
    this.fullname = fullname;
    this.phonenumber = phonenumber;
    this.date = date;
    this.logedin = 0;
    this.type = type;
    this.id = id;

  }
}



// Get the submit button
const submitBtn = document.querySelector('#submit-btn');



// Add an event listener to the submit button
submitBtn.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  let naid = /^\d{14}$/;
  let nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
  let idRegex = /^\d{8}$/;
  let numRegex = /^(010|011|012|015)\d{8}$/;

  if (!naid.test(NationalID.value.trim())) {
    alert('please enter a correct National ID');
    NationalID.focus();
    return false;
  }
  // Check if the required fields are filled
  if (fullname.value.trim() === '' || !nameRegex.test(fullname.value.trim())) {
    alert('Please enter your full name.');
    fullname.focus();
    return false;
  }

  if (username.value.trim() === '' || username.value.trim().length < 3 || !idRegex.test(username.value)) {
    alert('Username should be 8 characters');
    username.focus();
    return false;
  }


  if (password.value.trim() === '' || password.value.trim().length < 8) {
    alert('Password should be at least 8 characters');
    password.focus();
    return false;
  }

  if (confirmpass.value.trim() != password.value.trim()) {
    alert('Passwords do not match!');
    confirmpass.focus();
    return false;
  }

  if (phonenum.value.trim() === '' || !numRegex.test(phonenum.value)) {
    alert('Please enter your phone number.');
    phonenum.focus();
    return false;
  }

  if (date.value.trim() === '') {
    alert('Please enter your date of birth.');
    date.focus();
    return false;
  }
  for (i = 0; i < localStorage.length; i++) {
    let k = localStorage.key(i);

    if (JSON.parse(localStorage.getItem(k)).type === 0)
      continue;

    if (JSON.parse(localStorage.getItem(k)).NationalID === NationalID.value) {
      alert("duplicated NationalID ");
      return false;
    }
    if (JSON.parse(localStorage.getItem(k)).username === username.value) {
      alert(" this username is already used");
      return false;
    }
  }

  const user = new User(fullname.value, username.value, password.value, NationalID.value, phonenum.value, date.value, 1);

  localStorage.setItem(localStorage.length + 1, JSON.stringify(user));
  console.log("Success");

  window.location.replace(
    "login.html"
  );
});
