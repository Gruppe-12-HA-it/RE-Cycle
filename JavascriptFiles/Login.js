var eMail = document.getElementById("enteredEmail");
var password = document.getElementById("enteredPassword");
var existingUser = JSON.parse(localStorage.getItem("allUsers"));
var currentUserID = ("");


document.getElementById("Login!").addEventListener("click", checkLogin);

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
        localStorage.setItem("loggedIn", "true");
        location.href = "../HTMLFiles/index.html";

    } else if (userExists2 === false) {
        console.log("user and PW wrong");
        alert ("It seems like you haven't created a user yet- we will direct you to our sign up page!");
        location.href = "../HTMLFiles/Signup.html";
    }
}


