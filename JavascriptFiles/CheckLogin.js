// Lucas prøver at fixe bugs
function isLoggedInCart() {
    if (localStorage.getItem("loggedIn") === "true") {
    }
    else{
        location.href = "../HTMLFiles/LoginCart.html";
    }
}

//checking login status when clicking profile logo in header
function userLoginCheck(event) {
    event.preventDefault();

    if (localStorage.getItem("loggedIn") === "true") {
        location.href = "../HTMLFiles/Profile.html";
        return;
    }
    location.href = "../HTMLFiles/Login.html";
}
//Adding an event listener to the ID profile - ie. the profile logo in the navigation bar
document.getElementById("profile").addEventListener("click", userLoginCheck);

//Validating whether or not the user is logged in upon user attempting to access the Shopping Cart
function loginCartCheck(event) {
    event.preventDefault();

    if (localStorage.getItem("loggedIn") === "true") {
        location.href = "../HTMLFiles/Shoppingcart.html";
    }
    else
    location.href = "../HTMLFiles/LoginCart.html";
}
//Adding event listener to the ID 'cart'. Listening for whenever 'cart' is clicked, and then executing the function above
document.getElementById("cart").addEventListener("click", loginCartCheck);

//Checking login status when attempting to add to cart
function cartError(event) {
    event.preventDefault();
    confirm(
        "In order of adding products to your cart, you must log in or sign up."
    );
    location.href = "../HTMLFiles/Login.html";
}
//Adding an event listener to each instance of the class 'addToCart' in the html - ie. all the add to cart buttons
Array.from(document.getElementsByClassName("addToCart")).forEach(element => {
    element.addEventListener("click", cartError);
});
