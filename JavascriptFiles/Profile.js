//tjekker om en bruger er logged fordi for at se ens profile skal man være logged in, hvis man ikke er logged in bliver man redirected til Login siden
if (localStorage.getItem("loggedIn") === "true") {
}
else {
    location.href = "../Login.html";
}

currentUserEmailProfile = localStorage.getItem("currentUserEmail");
existingUserProfiles = JSON.parse(localStorage.getItem("allUsers"));

var foundUserProfile = existingUserProfiles.findIndex(function(user) {
    return user.email === currentUserEmailProfile;
});

var profileFirst = "Welcome" + " " + existingUserProfiles[foundUserProfile].firstName + "!";
var profileName = existingUserProfiles[foundUserProfile].firstName + " " + existingUserProfiles[foundUserProfile].lastName;
var profileEmail = existingUserProfiles[foundUserProfile].email;
var profileNumber = existingUserProfiles[foundUserProfile].phoneNumber;


document.getElementById('profileFirst').innerHTML = profileFirst;
document.getElementById('profileName').innerHTML = profileName;
document.getElementById('profileEmail').innerHTML = profileEmail;
document.getElementById('profileNumber').innerHTML = profileNumber;


document.getElementById("LogOut").addEventListener("click", LogOut);
//denne function logger brugeren ud ved at sætte loggedIn som undefined og dermed ikke === true

function LogOut() {
    localStorage.setItem("loggedIn", "");
    location.href = "../index.html";
    localStorage.setItem("currentUserEmail", "");
}
