// // Get the form element
const form = document.getElementById('user');

// Get the input fields
const firstname = document.querySelector('#fname');
const lastname = document.querySelector('#lname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmpass = document.querySelector('#confirmpass');
const phonenum = document.querySelector('#phonenum');
const genderRadios = document.querySelectorAll('input[type="radio"][name="gender"]');

// Get the submit button
const submitBtn = document.querySelector('#submit-btn');

// Retrieve the form data from local storage and pre-populate the form fields
const storedData = JSON.parse(localStorage.getItem('formData'));
if (storedData) {
  firstname.value = storedData['First Name'];
  lastname.value = storedData['Last Name'];
  username.value = storedData['username'];
  password.value = storedData['Password'];
  confirmpass.value = storedData['confrimpass'];
  phonenum.value = storedData['phone'];
  const selectedGender = storedData['gender'];
  genderRadios.forEach(radio => {
    if (radio.value === selectedGender) {
      radio.checked = true;
    }
  });
}

// Add an event listener to the submit button
submitBtn.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  let nameRegex = /^[a-zA-Z]+$/ ;
  let idRegex = /^\d{8}$/ ;
  let numRegex = /^(010|011|012|015)\d{8}$/;

  if (username.value.trim() === '' || username.value.trim().length < 3 || !idRegex.test(username.value)) {
    alert('Username should be more than 3 characters');
    username.focus();
    return false;
  }

  // Check if the required fields are filled
  if (firstname.value.trim() === '' || !nameRegex.test(firstname.value.trim())) {
    alert('Please enter your first name.');
    firstname.focus();
    return false;
  }

  if (lastname.value.trim() === '' || !nameRegex.test(lastname.value)) {
    alert('Please enter your last name.');
    lastname.focus();
    return false;
  }

  if (phonenum.value.trim() === '' || !numRegex.test(phonenum.value)) {
    alert('Please enter your phone number.');
    phonenum.focus();
    return false;
  }

  if (password.value.trim() === ''|| password.value.trim().length <8) {
    alert('Password should be at least 8 characters');
    password.focus();
    return false;
  }

  if (confirmpass.value.trim() != password.value.trim()) {
    alert('Passwords do not match!');
    confirmpass.focus();
    return false;
  }

  let genderSelected = false;

  genderRadios.forEach((radio) => {
    if (radio.checked) {
      genderSelected = true;
    }
  }); 

  if (genderSelected===false) {
    alert('Please choose a gender');
    event.preventDefault();
    return false;
  }

  const formData = {
    'First Name': firstname.value,
    'Last Name': lastname.value,
    'username': username.value,
    'Password': password.value,
    'confrimpass': confirmpass.value,
    'phone': phonenum.value,
    'gender':genderRadios.value
  };
  localStorage.setItem('formData',JSON.stringify(formData)); 
  console.log(formData);
  console.log("Success");
  
  window.location.replace(
    "navpage v2.html"
  );
});
