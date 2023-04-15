const form = document.getElementById('login');
const username = document.querySelector("#username");
const password = document.querySelector("#password");

// Get the submit button
const submitBtn = document.querySelector('#login-btn');

const storedData = JSON.parse(localStorage.getItem('formData'));
if (storedData) {
  username.value = storedData['username'];
  password.value = storedData['Password'];
}
// Add an event listener to the submit button
submitBtn.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  let idRegex = /^\d{8}$/ ;

  if (username.value.trim() === '' || username.value.trim().length < 3 || !idRegex.test(username.value)) {
    alert('Username should be more than 3 characters');
    username.focus();
    return false;
  }
  
  if (password.value.trim() === ''|| password.value.trim().length <8) {
    alert('Password should be at least 8 characters');
    password.focus();
    return false;
  }


const formData = {
  'username': username.value,
  'Password': password.value,
};
  localStorage.setItem('formData',JSON.stringify(formData)); 
  console.log(formData);
  console.log("Success");
  
  window.location.replace(
  "navpage v2.html"
);
});
