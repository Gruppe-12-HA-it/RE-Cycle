//ar eMail = document.getElementById("enteredEmail");
//var password = document.getElementById("enteredPassword");
//var existingUser = JSON.parse(localStorage.getItem("allUsers"));
var currentUserID = ("");


document.getElementById("Login!").addEventListener("click", loginFunction);

function checkLogin (event) {
    event.preventDefault();
    console.log("works so far");
    let userExists = false;

    var eMail = localStorage.getItem("savedEmail22");
    var password = localStorage.getItem("savedPassword22");
    var existingUser = JSON.parse(localStorage.getItem("allUsers"));


    if (eMail.value === existingUser.email && password.value === existingUser.password) {
        userExists = true;
        currentUserID = existingUser.id;
        console.log(currentUserID);
        console.log("it works");
        localStorage.setItem("loggedIn", "true");
    }

    else if (eMail.value === existingUser.email && password.value !== existingUser.password) {
        alert("Wrong password- try again!");
        userExists = true;
    }

    if (userExists === false) {
        //alert ("It seems like you haven't created a user yet- we will direct you to our sign up page!");
        //location.href = "../HTMLFiles/Signup.html";
        console.log(eMail);
        console.log(password);
        console.log(existingUser);
    }
}

function loginFunction() {
    saveUsername();
    savePassword();
    checkLogin();
}

function saveUsername() {
    let theUsername= document.getElementById('enteredEmail').value;
    localStorage.setItem("savedEmail22", theUsername);
    console.log(localStorage.getItem("savedEmail22"));
}

function savePassword() {
    let thePassword= document.getElementById("enteredPassword").value;
    localStorage.setItem("savedPassword22", thePassword);
    console.log(localStorage.getItem("savedPassword22"));
}