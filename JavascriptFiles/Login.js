var eMail = document.getElementById("enteredEmail");
var password = document.getElementById("enteredPassword");
var existingUser = JSON.parse(localStorage.getItem("allUsers"))
// console.log(existingUser);

//Admin login
var adminEmail = "admin";
var adminPassword = "admin";


document.getElementById("Login!").addEventListener("click", checkLogin);

function checkLogin (event) {
    event.preventDefault();
    console.log("works so far");
    let userExists = false;

     if (eMail.value == adminEmail && password.value == adminPassword) {
        alert("Hello Admin");
        userExists = true;
    }

  /*  else if (eMail.value == existingUser[i].eMail && password.value == existingUser[i].password) {
        alert("Hello user")
        userExists = true;
        document.location = "GUI.html"
    }

    else if (eMail.value == existingUser[i].eMail && password.value != existingUser[i].password) {
        alert("Wrong password- try again!");
        userExists = true;
    }

    */
    if (userExists == false) {
        alert ("It seems like you haven't created a user yet- we will direct you to our sign up page!");
        location.href = "../HTMLFiles/Signup.html";
    }
}
