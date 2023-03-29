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


function confirmPassword (form) {
    let pwd1 = form.pass.value;
    let pwd2 = form.conpass.value;
    
    if (pwd1 == "") {
        alert("Enter a password")
    } else if (pwd2 == "") {
        /* match = "valid"; */
        alert("Confirm password")
   } else if (pwd1 != pwd2) {
        /* match = "invalid" */
        alert("passwords do not match")
   } else {
        alert("passwords match")
   }
}