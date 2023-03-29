// Pseudo code

/* 

What to do?

- match passwords
- show text "passwords match / do not match" based on whether passwords match


How to do this?

- link js to each html password elements
- compare two password elements
--- if pwd1 === pwd2 then valid etc
--- else invalid



*/



/* let match;

function confirmPassword () {
    let pwd1 = document.getElementById("#pass").value;
    let pwd2 = document.getElementById("#con-pass").value;
    
    if (pwd1 == "") {
        alert("Enter a password")
    } else if (pwd1 === pwd2) {
        
        alert("passwords match")
   } else {
        
        alert("passwords do not match")
   }
}

confirmPassword(); */

/* 
function confirmPassword() {
    /* let pwd1 = form.pass.value;
    /* let pwd2 = form.conpass.value; 
    let pwd1 = document.getElementById("#pass").value;
    let pwd2 = document.getElementById("#conpass").value;
    let msg1 = document.getElementsByClassName(".pwd1");
    let msg2 = document.getElementsByClassName(".pwd2");
    
    console.log(pwd1);
    console.log(pwd2);

    if (pwd1 == "a") {
        msg1.innerHTML = "Enter a password";
        console.log(msg1);
    } else if (pwd2 == "b") {
        msg2.innerHTML = "Confirm password";
        console.log(msg2);
   } else if (pwd1 != pwd2) {
        msg1.innerHTML = "Passwords do not match";
        msg2.innerHTML = "Passwords do not match";
        console.log(msg1);
        console.log(msg2);
   } else {
        msg1.innerHTML = "Passwords match";
        msg2.innerHTML = "Passwords match";
        console.log(msg1);
        console.log(msg2);
   }
} */

/* let btn = document.getElementsByClassName(".btn");
btn.addEventListener("onclick", (event) => {
    event.confirmPassword()
}) */

/* Stop button from default reloading web page */

/* let btn = document.getElementsByClassName(".btn");
btnInput.addEventListener("submit", (event) => {
    event.preventDefault();
}) */


function confirmPassword() {
    let pwd1 = document.querySelector("#pass").value;
    let pwd2 = document.querySelector("#conpass").value;
    let msg1 = document.querySelector(".pwd1");
    let msg2 = document.querySelector(".pwd2");
    
    console.log(pwd1);
    console.log(pwd2);

    if (pwd1 == "") {
        msg1.innerText = "Enter a password";
        msg2.innerText = "";
        console.log(msg1);
    } else if (pwd2 == "") {
        msg2.innerText = "Confirm password";
        console.log(msg2);
   } else if (pwd1 != pwd2) {
        msg1.innerText = "Passwords do not match";
        msg2.innerText = "Passwords do not match";
        console.log(msg1);
        console.log(msg2);
   } else {
        msg1.innerText = "Passwords match";
        msg2.innerText = "Passwords match";
        console.log(msg1);
        console.log(msg2);
   }
}