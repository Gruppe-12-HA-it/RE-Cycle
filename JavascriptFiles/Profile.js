if (localStorage.getItem("loggedIn") === "true") {
    }
    else {
        location.href = "../HTMLFiles/Login.html";
    }

currentUserEmailProfile = localStorage.getItem("currentUserEmail");
existingUserProfiles = JSON.parse(localStorage.getItem("allUsers"));

document.getElementById("tester123").addEventListener("click", getCurrentUserInfo);
document.getElementById("LogOut").addEventListener("click", LogOut);

function LogOut() {
    localStorage.setItem("loggedIn", "");
    location.href = "../HTMLFiles/index.html";
    localStorage.setItem("currentUserEmail", "");
}

function getCurrentUserInfo() {



  //  var foundUserProfile = existingUserProfiles.indexOf(function (user) {currentUserEmailProfile.value});
    // console.log(foundUserProfile);

  var foundUserProfile = existingUserProfiles.indexOf(function(user) {
        return user.email === currentUserEmailProfile.value;
    });
    console.log(foundUserProfile);
    console.log(currentUserEmailProfile);


}

