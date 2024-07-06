// var sing_username=document.getElementById(`sing_uaername`);
// console.log(sing_username);
// var sing_email=document.getElementById(`sing_email`);
// console.log(sing_email);
// var sing_password = document.getElementById(`sing_password`);
// console.log(sing_password);
// // login
// var login_email=document.getElementById(`login_email`);
// console.log(login_email);
// var login_password=document.getElementById(`login_password`);
// console.log(login_password);
// // sing btn
//   var sing_btn2=document.getElementById(`btn2`);
// //   login up btn
//  var login_btn2=document.getElementById(`btn2`);
//  console.log(sing_btn2);



//  var login_fill_condition = true;
//  var sing_fill_condition = true;


//  // sing function 
// //  sing_btn2.addEventListener(`click`,function () {
// //     if (sing_fill_condition == true) {
// //         if (sing_username.value==``) {
// //             Swal.fire("Pleas Enter UserName 📝");
// //             // alert(`Please Enter UserName`)



// //         }
// //         else if(sing_email.value==``)
// //         Swal.fire("Pleas Enter email 📝");
// //            // alert(`Please Enter email`);
// //          else if(sing_password.value==``)
// //             Swal.fire("Pleas Enter password  📝")



// //            // alert(`Please Enter password`);
// // //          else if(!sing_email.includes('@gmail.com'))
// // // Swal.fire("Pleas Enter email 📝");
// //         //   alert(`Please Enter a valid Email`);



// //     }
// //     else{
// //    title: "Accounted Created Sucessfully"
// // confirmButtonText:"ok"


// // //alert(`Accounted Created Sucessfully`);


// //     }
// //  })



// //  .then((result)=>{
// //  if(result.isConfirmed){
// //      Window.location.href=`/index.html`;
// //  }
// //   })


//copy;

// // Sign up in function start
// sing_btn2.addEventListener(`click`, function () {
//     if (sing_fill_condition == true) {
//         if (sing_username.value == ``) {
//             Swal.fire("Pleas Enter Username 📝");
//         }
//         else if (sing_email.value == ``) {
//             Swal.fire("Pleas Enter Email 📝");
//         }
//         else if (sing_password.value == ``) {
//             Swal.fire("Pleas Enter Password 📝");
//         }
//         else if (!sing_email.value.includes('@gmail.com')) {
//             Swal.fire("Pleas Enter a valid Email 📝");
//         }
//         else {
//             Swal.fire({
//                 title: "Account Created Successfully 📝",
//                 confirmButtonText: "Ok",
//               }).then((result) => {
//                 if (result.isConfirmed) {
//                     window.location.href = 'index.html';
//                 }
//               });
//             var sign_details = {
//                 username: sing_username.value,
//                 email: sing_email.value,
//                 password: sing_password.value,
//             }
//             localStorage.setItem(`${sing_email.value}`, JSON.stringify(sign_details))
//             setTimeout(() => {
//                 window.location.href = '/index.html';
//             }, 2000);
//         }
//     }
// })



// //  login 

// // login_btn2.addEventListener("click",function () {

// //     if (login_fill_condition == true){
// //       if (sing_email.value == ``) {
// //             Swal.fire("Pleas Enter Email 📝");
// //         }
// //         else if (sing_password.value == ``) {
// //             Swal.fire("Pleas Enter Password 📝");
// //         }
// //          else if (!sing_email.value.includes('@gmail.com')) {
// //             Swal.fire("Pleas Enter a valid Email 📝");
// //         }
// //     } 
    
// // })



// // Log in function start
// login_btn2.addEventListener(`click`, function (event) {
//     event.preventDefault()
//     if (login_fill_condition == true) {
//         if (login_email.value == ``) {
//             Swal.fire("Pleas Enter Email 📝");
//         }
//         else if (login_password.value == ``) {
//             Swal.fire("Pleas Enter Password 📝");
//         }
//         else if (!login_email.value.includes('@gmail.com')) {
//             Swal.fire("Pleas Enter a valid Email 📝");
//         }
//         else if (login_email.value != `` && login_password.value != ``) {
//             var arr = []
//             var found = false
//             for (let i = 0; i < localStorage.length; i++) {
//                 arr.push(localStorage.key(i));

//             }
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i].includes(login_email.value)) {
//                     var convert = JSON.parse(localStorage.getItem(`${arr[i]}`))
//                     if (login_email.value == convert.email) {
//                         found = true
//                         if (login_password.value != convert.password) {
//                             Swal.fire("Password not match 📝");
//                         }
//                         else if (login_password.value == convert.password) {
//                             Swal.fire({
//                                 title: "Successfully log in 📝",
//                                 confirmButtonText: "Ok",
//                               }).then((result) => {
//                                 if (result.isConfirmed) {
//                                   window.location.href = `check.html`
//                                 }
//                               });
//                             setTimeout(() => {
//                                 window.location.href = `check.html`
//                             }, 2000);
//                         }
//                     }

//                 }

//             }
//             if (found == false) {
//                 Swal.fire({
//                     title: "User Not found 📝",
//                     confirmButtonText: "Ok",
//                   }).then((result) => {
//                     if (result.isConfirmed) {
//                       window.location.href = `signup.html`
//                     }
//                   });
//                 setTimeout(() => {
//                     window.location.href = `signup.html`
//                 }, 2000);
//             }
//         }
//     }
// })
















































// var sign_username = document.getElementById(`sign_username`)
// var sign_email = document.getElementById(`sign_email`)
// var sign_password = document.getElementById(`sign_password`)

// // Log_in item 
// var log_email = document.getElementById(`log_email`)
// var log_password = document.getElementById(`log_password`)


// // login button 
// var login_btn2 = document.getElementById(`btn2`)

// // Sign_up button 
// var sign_btn2 = document.getElementById(`btn2`)

// // Eye button
// var eye_btn1 = document.getElementById(`btn1`)

// // Condition
// var login_fill_condition = true
// var sign_fill_condition = true


// // Sign up in function start
// sign_btn2.addEventListener(`click`, function () {
//     if (sign_fill_condition == true) {
//         if (sign_username.value == ``) {
//             Swal.fire("Pleas Enter Username 📝");
//         }
//         else if (sign_email.value == ``) {
//             Swal.fire("Pleas Enter Email 📝");
//         }
//         else if (sign_password.value == ``) {
//             Swal.fire("Pleas Enter Password 📝");
//         }
//         else if (!sign_email.value.includes('@gmail.com')) {
//             Swal.fire("Pleas Enter a valid Email 📝");
//         }
//         else {
//             Swal.fire({
//                 title: "Account Created Successfully 📝",
//                 confirmButtonText: "Ok",
//               }).then((result) => {
//                 if (result.isConfirmed) {
//                     window.location.href = '../index.html';
//                 }
//               });
//             var sign_details = {
//                 username: sign_username.value,
//                 email: sign_email.value,
//                 password: sign_password.value,
//             }
//             localStorage.setItem(`${sign_email.value}`, JSON.stringify(sign_details))
//             setTimeout(() => {
//                 window.location.href = '../index.html';
//             }, 2000);
//         }
//     }
// })
