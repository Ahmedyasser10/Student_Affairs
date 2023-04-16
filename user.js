// // Get the form element
const form = document.getElementById('user');

// Get the input fields
const firstname = document.querySelector('#fname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmpass = document.querySelector('#confirmpass');
const phonenum = document.querySelector('#phonenum');
const genderRadios = document.querySelectorAll('input[type="radio"][name="gender"]');
const logOut = document.querySelector("#LogOut") ;


// Get the submit button
const submitBtn = document.querySelector('#submit-btn');

// Retrieve the form data from local storage and pre-populate the form fields
  





class User {
  constructor( fullname , username , password , id  , phonenumber  , date , type ) {
    this.username = username ;
    this.password = password ; 
    this.fullname = fullname ;
    this.phonenumber = phonenumber ;
    this.date = date ;
    this.logedin = 0 ;
    this.type = type ;
    this.id = id ;
  }
}

let curUser  = new User() ;

window.onload = function(){
  for( i = 0 ;i<localStorage.length ; i++){
    let k = localStorage.key(i) ;
    if (JSON.parse(localStorage.getItem(k)).type === 0 )
      continue ;
   
        flag  = 1 ;
        let x = JSON.parse(localStorage.getItem(k)) ;
        if (x.logedin === 1 ){
          curUser  = x ;
          break ;
        }
  }
  firstname.value = curUser.fullname ;
  username.value = curUser.username ;
  password.value = curUser.password ;
  phonenum.value = curUser.phonenumber ;
  confirmpass.value = curUser.password ;
 
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

  let c = -1 ;
  for( i = 0 ;i<localStorage.length ; i++){
    let k = localStorage.key(i) ;
    
    if (JSON.parse(localStorage.getItem(k)).type === 0)
      continue ;
    
    if ((JSON.parse(localStorage.getItem(k)).logedin === 1 ))
      c = k ;
    if ( JSON.parse(localStorage.getItem(k)).username === username.value   &&  (JSON.parse(localStorage.getItem(k)).logedin === 0 )  ) {
      alert(" this username is already used") ;
      return false ;
    }
  }

  const user = new User(firstname.value , username.value ,password.value ,curUser.id ,phonenum.value ,curUser.date , 1 ) ;

  user.logedin = 1 ;

  console.log(user);
  localStorage.setItem( c,JSON.stringify(user)) ; 
  console.log("Success");
  
  window.location.replace(
    "user.html"
  );
});


logOut.onclick = function(){
  console.log("hiii");
  for( i = 0 ;i<localStorage.length ; i++){
      let k = localStorage.key(i) ;
      if (JSON.parse(localStorage.getItem(k)).type === 0 )
           continue ;

      let x = JSON.parse(localStorage.getItem(k)) ;
      if (x.logedin === 1){
          x.logedin = 0 ;
          console.log("hello world");
          localStorage.setItem(k , JSON.stringify(x)) ;
          break;
      }
  }   
}
