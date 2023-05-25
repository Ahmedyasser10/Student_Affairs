// const form = document.getElementById('login');
// const username = document.querySelector("#username");
// const password = document.querySelector("#password");

// // Get the submit button
// const submitBtn = document.querySelector('#login-btn');

// // window.onload = function () {
// //   for (i = 0; i < localStorage.length; i++) {
// //     let k = localStorage.key(i);
// //     if (JSON.parse(localStorage.getItem(k)).type === 0)
// //       continue;

// //     flag = 1;
// //     let x = JSON.parse(localStorage.getItem(k));
// //     if (x.logedin === 1) {
// //       window.location.href = "navpage v2.html";
// //       break;
// //     }
// //   }
// // }


// class User {
//   constructor(fullname, username, password, id, phonenumber, date, type) {
//     this.username = username;
//     this.password = password;
//     this.fullname = fullname;
//     this.phonenumber = phonenumber;
//     this.date = date;
//     this.logedin = 0;
//     this.type = type;

//   }
// }




// submitBtn.addEventListener('click', function (event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   let idRegex = /^\d{8}$/;

//   if (username.value.trim() === '' || !idRegex.test(username.value)) {
//     alert('Username should be 8 characters');
//     username.focus();
//     return false;
//   }

//   if (password.value.trim() === '' || password.value.trim().length < 8) {
//     alert('Password should be at least 8 characters');
//     password.focus();
//     return false;
//   }



//   let flag = 0;
//   // for (i = 0; i < localStorage.length; i++) {
//   //   let k = localStorage.key(i);
//   //   if (JSON.parse(localStorage.getItem(k)).type === 0)
//   //     continue;

//   //   if (JSON.parse(localStorage.getItem(k)).username === username.value && JSON.parse(localStorage.getItem(k)).password === password.value) {
//   //     flag = 1;
//   //     let x = JSON.parse(localStorage.getItem(k));
//   //     x.logedin = 1;
//   //     localStorage.setItem(k, JSON.stringify(x));
//   //     console.log(JSON.parse(localStorage.getItem(k)).logedin);
//   //     break;
//   //   }
//   // }

 



// });
