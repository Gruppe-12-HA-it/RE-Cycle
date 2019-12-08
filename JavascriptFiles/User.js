class User {
    constructor(firstName, lastName, email, phoneNumber, password, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.id = id;
    }
}

if (localStorage.getItem("allUsers") == null) {
    var allUsers = [];

    var adminLogin = new User(
        "Lucas",
        "Simper",
        "admin",
        "41825833",
        "admin",
        "1");

    allUsers.push(adminLogin);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    //console.log(JSON.parse(localStorage.getItem("allUsers")));
    //console.log("it works");
}
else {
    //console.log("it doesnt work");
}

function checkInputs() {

    var existingUser2 = JSON.parse(localStorage.getItem("allUsers"));
    var foundUser2 = existingUser2.find(function (user) {
        return user.email === document.getElementById("email").value
    });
        existingUser2 = !!foundUser2;


    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    var passed = "true";

    if (existingUser2 === true){
        passed = "false";
        alert("That email is already registered to an account")
    }

    if (firstName.length < 1) {
        passed = "false";
        alert("You must provide a valid first name");
    }
    if (lastName.length < 1) {
        passed = "false";
        alert("You must provide a valid last name");
    }
    if (email.length < 1) {
        passed = "false";
        alert("You must provide a valid email");
    }
    if (isNaN(phoneNumber) && phoneNumber.length > 12){
        passed = "false";
        alert("You must provide a valid phone number");
    }
    if (password.length < 1) {
        passed = "false";
        alert("You must provide a valid password");
    }
    if (password != confirmPassword) {
        passed = "false";
        alert("Passwords do not match");
    }

    if (passed === "true") {
            createUser();

}
    else {
        return false;
    }

}

document.getElementById("signUp").addEventListener("click", checkInputs);

function createUser(event) {
    event.preventDefault();
    var idLength = JSON.parse(localStorage.getItem("allUsers"));

    let htmlLogin = new User(
        document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("email").value,
        document.getElementById("phoneNumber").value,
        document.getElementById("password").value
    );
    htmlLogin.id = idLength.length + 1;

    allUsers = JSON.parse(localStorage.getItem("allUsers"));
    allUsers.push(htmlLogin);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    console.log(allUsers);
    //console.log(allUsers[1]);
    location.href = "../HTMLFiles/Login.html";
    alert(
        "Thank you for creating a user! We will now redirect you to our homepage!"
    );

}
