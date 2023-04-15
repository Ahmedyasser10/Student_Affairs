// // Get the form element
// const form = document.getElementById('user');

// // Get the input fields
// const firstname = document.querySelector('#fname');
// const lastname = document.querySelector('#lname');
// const username = document.querySelector('#username');
// const password = document.querySelector('#password');
// const confirmpass = document.querySelector('#confirmpass');
// const phonenum = document.querySelector('#phonenum');
// const genderRadios = document.querySelectorAll('input[type="radio"][name="gender"]');


// // Get the submit button
// const submitBtn = document.querySelector('#submit-btn');

// // Add an event listener to the submit button
// submitBtn.addEventListener('click', function (event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   if (username.value.trim() === '' || username.value.trim().length < 3) {
//     alert('Username should be more than 3 characters');
//     username.focus();
//     return false;
//   }

//   // Check if the required fields are filled
//   if (fname.value.trim() === '') {
//     alert('Please enter your first name.');
//     fname.focus();
//     return false;
//   }

//   if (lname.value.trim() === '') {
//     alert('Please enter your last name.');
//     lname.focus();
//     return false;
//   }

//   if (phonenum.value.trim() === '') {
//     alert('Please enter your phone number.');
//     phonenum.focus();
//     return false;
//   }

//   if (password.value.trim() === ''|| password.value.trim().length <8) {
//     alert('Password should be at least 8 characters');
//     password.focus();
//     return false;
//   }

//   if (confirmpass.value.trim() != password.value.trim()) {
//     alert('Passwords do not match!');
//     confirmpass.focus();
//     return false;
//   }

//   let genderSelected = false;
//   genderRadios.forEach((radio) => {
//     if (radio.checked) {
//       genderSelected = true;
//     }
  
//     if (genderSelected===false) {
//       alert('Please choose a gender');
//       event.preventDefault();
//       return false;
//     }

// const formData = {
//   'First Name': fname.value,
//   'Last Name': lname.value,
//   'username': username.value,
//   'Password': password.value,
//   'confrimpass': confirmpass.value,
//   'phone': phonenum.value,
// };
//   console.log(formData);
//   console.log("Success");
  
//   window.location.replace(
//   "navpage v2.html"
// );
//   });

// Get the form element
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

// Add an event listener to the submit button
submitBtn.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  if (username.value.trim() === '' || username.value.trim().length < 3) {
    alert('Username should be more than 3 characters');
    username.focus();
    return false;
  }

  // Check if the required fields are filled
  if (fname.value.trim() === '') {
    alert('Please enter your first name.');
    fname.focus();
    return false;
  }

  if (lname.value.trim() === '') {
    alert('Please enter your last name.');
    lname.focus();
    return false;
  }

  if (phonenum.value.trim() === '') {
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
  }); // <- add this closing curly brace

  if (genderSelected===false) {
    alert('Please choose a gender');
    event.preventDefault();
    return false;
  }

  const formData = {
    'First Name': fname.value,
    'Last Name': lname.value,
    'username': username.value,
    'Password': password.value,
    'confrimpass': confirmpass.value,
    'phone': phonenum.value,
  };
  console.log(formData);
  console.log("Success");
  
  window.location.replace(
    "navpage v2.html"
  );
});
