
const logOut = document.getElementById("logout");
const logOut2 = document.getElementById("logout2");

// window.onload = function(){
//   let ctr = 0 ;
//   for( i = 0 ; i< localStorage.length ; i++){
//     let k = localStorage.key(i) ;
//     let cur = JSON.parse(localStorage.getItem(k)) ;
//     if (cur.type === 1 )
//       continue ;
//     ctr++ ;
//     let list = document.getElementById("form");
//     let cell1 = document.createElement("td") ;
//     let cell2 = document.createElement("td") ;
//     let cell3 = document.createElement("td") ;
//     let cell4 = document.createElement("td") ;
//     let cell5 = document.createElement("td") ;
//     let cell6 = document.createElement("td") ;
//     // let cell6 = document.createElement("td") ;
//     cell1.textContent = ctr  ;
//     cell2.textContent = cur.name ;
//     cell3.textContent = cur.id;
//     cell4.textContent = cur.level ;
//     cell5.textContent = cur.gpa ;
//     cell6.textContent = cur.depart ;
//     // cell6.textContent = cur.l ;
//     const cell7 = document.createElement("td");
//     const status = document.createElement("p");
//     status.classList.add("status", "active");
//     status.textContent = "Active";
//     cell7.appendChild(status);

//     let newStudent = document.createElement("tr");
//     newStudent.appendChild(cell1);    
//     newStudent.appendChild(cell2);    
//     newStudent.appendChild(cell3);    
//     newStudent.appendChild(cell4);    
//     newStudent.appendChild(cell5);  
//     newStudent.appendChild(cell6);  
//     newStudent.appendChild(cell7);  

//     list.appendChild(newStudent) ;
//   }
// }
// logOut.onclick = function () {
//   for (i = 0; i < localStorage.length; i++) {
//       let k = localStorage.key(i);
//       if (JSON.parse(localStorage.getItem(k)).type === 0)
//           continue;

//       let x = JSON.parse(localStorage.getItem(k));
//       if (x.logedin === 1) {
//           x.logedin = 0;
//           localStorage.setItem(k, JSON.stringify(x));
//           break;
//       }
//   }
// }

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
