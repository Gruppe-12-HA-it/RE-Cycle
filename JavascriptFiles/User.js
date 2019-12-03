document.getElementById("signUp").addEventListener("click", checkInputs);

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

function createAdminLogin() {
    var adminLogin = new User(
        "Lucas",
        "Simper",
        "admin",
        "41825833",
        "admin",
        "0");

    console.log(adminLogin);
    localStorage.getItem("allUsers");
    allUsers.push(adminLogin);
    localStorage.setItem("allUsers", JSON.stringify(all));
    console.log(JSON.parse(localStorage.getItem("allUsers")));
}

var idNumber = 0;

function increment(){

    idNumber ++;
    return idNumber;
}

function checkInputs() {

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    var passed = "true";

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

//createuser

function createUser() {
    increment();

    var userObj = new User(
        document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("email").value,
        document.getElementById("phoneNumber").value,
        document.getElementById("password").value);
        userObj.id = idNumber;
        console.log(userObj);

        localStorage.getItem("allUsers");

        allUsers.push(userObj);

    localStorage.setItem("allUsers", JSON.stringify(userObj));

    console.log(JSON.parse(localStorage.getItem("allUsers")));

    alert("Thank you for creating a user! We will now redirect you to our homepage!");

}