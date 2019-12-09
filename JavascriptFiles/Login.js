var eMail = document.getElementById("enteredEmail");
var password = document.getElementById("enteredPassword");
var existingUser = JSON.parse(localStorage.getItem("allUsers"));
var currentUserID = ("");

//Eventhandler for login knap
document.getElementById("Login!").addEventListener("click", checkLogin);
document.getElementById("createUserRedirect").addEventListener("click", redirect);

function redirect() {
    location.href = "../HTMLFiles/Signup.html";
}

//Functionen tager den indtastede email og password og søger i vores allusers array som ligger i local storage
// hvis email og passwork eksister bliver man redirected til forsiden og "logged in" bliver sat som true
//hvis email eksister men pw ikke gøre kan man prøve igen ellers bliver man redirected til at lave en konto

function checkLogin (event) {
    event.preventDefault();
    // console.log("works so far");

    var foundUser = existingUser.find(function (user) {
        return user.email === eMail.value && password.value !== user.password;
    });

    var userExists = !!foundUser;

    if (userExists === true) {
        alert("Wrong password- try again!");
    }

    if (userExists === false) {
        var foundUser2 = existingUser.find(function (user) {
            return user.email === eMail.value && password.value === user.password;
        });

        var userExists2 = !!foundUser2;
    }

    if (userExists2 === true) {
        console.log("Email and PW correct");
        localStorage.setItem("currentUserEmail", eMail.value);
        localStorage.setItem("loggedIn", "true");
        location.href = "../HTMLFiles/index.html";

    } else if (userExists2 === false) {
        console.log("user and PW wrong");
        alert ("It seems like you haven't created a user yet- we will direct you to our sign up page!");
        location.href = "../HTMLFiles/Signup.html";
    }
}


