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


// Get the submit button
const submitBtn = document.querySelector('#submit-btn');

// Add an event listener to the submit button
submitBtn.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  if (NationalID.value.trim().length != 14) {
    alert('please enter a correct National ID');
    NationalID.focus();
    return false;
  }
  // Check if the required fields are filled
  if (fullname.value.trim() === '') {
    alert('Please enter your full name.');
    fullname.focus();
    return false;
  }

  if (username.value.trim() === '' || username.value.trim().length < 3) {
    alert('Username should be more than 3 characters');
    username.focus();
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

  if (phonenum.value.trim() === '') {
    alert('Please enter your phone number.');
    phonenum.focus();
    return false;
  }

  if (date.value.trim() === '') {
    alert('Please enter your date of birth.');
    date.focus();
    return false;
  }


const formData = {
  'Full Name': fullname.value,
  'username': username.value,
  'Password': password.value,
  'confrimpass': confirmpass.value,
  'phone': phonenum.value,
  'DOB': date.value,
  'ID':NationalID.value,
};
  console.log(formData);
  console.log("Success");
  
  window.location.replace(
  "navpage v2.html"
);
});
