const cartProducts = document.getElementById("productsInCart");
const myProducts = "../products.json";
let cartData = undefined;
let loadProduct = undefined;
console.log("Migos");
function retrieveProductFromLS(){
    if (!loadProduct) {
        loadProduct = localStorage.getItem("Order");
        console.log(loadProduct);
    }
}
function display(type) {
    if (!cartData) {
        fetch(myProducts)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                cartData = json.products;
                display(type);
            });
        return;
    }

    cartProducts.innerHTML = "";

    if (!type) {
        console.log("No products in cart, make sure to go purchase!");
        }

    cartData
        .filter(function(dataset) {
            return dataset.id === type;
        })
        .forEach(function(product) {
            cartProducts.innerHTML += WriteCartItem(product);
        });
}


function WriteCartItem(product) {
    // noinspection JSConstructorReturnsPrimitive
    return `<div class="CartProduct" id="cartProduct">
    <p>${product.name}</p>
    <p>${product.price}DKK</p>
    <button id="removeItemFromCart" onclick="RemoveFromCart()">X</button>
  </div>
  <hr/>`;
}
function RemoveFromCart(){
    localStorage.setItem("Order" ,0);
    console.log("cart cleared");
    displayCartItems();
}
function displayCartItems() {
    display(loadProduct);
}

retrieveProductFromLS();
displayCartItems();
