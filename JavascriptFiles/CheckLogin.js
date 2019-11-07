//checking login status when clicking profile logo in header
document.getElementById('profile').addEventListener('click', function(event) {
    event.preventDefault();

    //check if user is logged in; login stored as global token in localstorage
    if(localStorage.user) {
        location.href = "../HTMLFiles/Profile.html";
        return; //cuts off the remainder of the if/else statement. If user isn't logged in, goes straight login.html below
    }

    location.href = "../HTMLFiles/Login.html";
});
console.log("CheckLogin.js loaded succesfully");

//checking login status when clicking cart logo in header
document.getElementById('cart').addEventListener('click', function(event) {
    event.preventDefault();

    if(localStorage.user) {
        location.href="../HTMLFiles/Shoppingcart.html";
        return;
    }
    location.href = "../HTMLFiles/LoginCart.html";

});

/*Checking login status when attempting to add to cart
document.getElementsByClassName('addToCart').forEach(element => {
addEventListener('click', function(event)
    event.preventDefault(); }
//If user is logged in: add to cart. Else, display message and direct to login page
    if(localStorage.user) {
        //add to cart function here
        return;
    }
    window.confirm("In order of adding products to your cart, you must log in or sign up.");
    window.location.href='../HTMLFiles/Login.html';
});
*/
//forsøg på at få add-to-cart error til at virke
function cartError(event) {
    event.preventDefault();
    alert(1);
}

document.getElementsByClassName('addToCart').forEach(element => {
    element.addEventListener('click', cartError);
});


