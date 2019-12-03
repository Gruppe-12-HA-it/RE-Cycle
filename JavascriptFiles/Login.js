var eMail = document.getElementById("enteredEmail");
var password = document.getElementById("enteredPassword");
var existingUser = JSON.parse(localStorage.getItem("allUsers"));
var currentUserID = ("");



//Admin login
var adminEmail = "admin";
var adminPassword = "admin";


document.getElementById("Login!").addEventListener("click", checkLogin);

function checkLogin (event) {
    event.preventDefault();
    console.log("works so far");
    let userExists = false;

    if (localStorage.getItem("allUsers" == null)){
        createAdminLogin();
        console.log("Admin Login Created")
    }

     if (eMail.value === adminEmail && password.value === adminPassword) {
        alert("Hello Admin");
        userExists = true;
    }

    else if (eMail.value === existingUser.email && password.value === existingUser.password) {
        userExists = true;
        currentUserID = existingUser.id;
        console.log(currentUserID);
        localStorage.setItem("loggedIn", "true");
    }

    else if (eMail.value === existingUser.email && password.value !== existingUser.password) {
        alert("Wrong password- try again!");
        userExists = true;
    }

    if (userExists === false) {
        alert ("It seems like you haven't created a user yet- we will direct you to our sign up page!");
        location.href = "../HTMLFiles/Signup.html";
    }
}
