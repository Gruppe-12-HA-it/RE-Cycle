/*Defining all needed variables*/
const cartProducts = document.getElementById("productsInCart");
const myProducts = "../products.json";
let cartData = undefined;
let loadProduct = undefined; //variabel der skal lagre productID fra localStorage

function retrieveProductFromLS(){
    if (!loadProduct) {
        loadProduct = localStorage.getItem("Order");
        console.log(loadProduct);
    }
}//Hvis loadProduct er undefined (det er det by standard), trækkes productID fra localStorage og loadProduct ændres
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
    } //benytter fetch api'en til at fetche en array af produkter fra json

    cartProducts.innerHTML = ""; //sikrer at html'en er tom inden der skrives i den

    if (!type) {
        console.log("No products in cart, make sure to go purchase!");
        } //check undervejs for at sikre funktionalitet

    cartData
        .filter(function(dataset) {
            return dataset.id === type;
        }) //benytter array.filter, filtrerer så det kun er det valgte produkt tilbage

        .forEach(function(product) {
            cartProducts.innerHTML += WriteCartItem(product);
        }); //array.forEach for at bruge WriteCartItem for hvert produkt

} /*Kodet til at fungere med flere produkter fra en eventuel array af produktID'er trukket fra localStorage.
På nuværende tidspunkt er vores kode på produktsiden dog lavet, så man kun kan have et produkt i sin kurv af gangen*/


function WriteCartItem(product) {
    // noinspection JSConstructorReturnsPrimitive - added for at stoppe en error message
    return `<div class="CartProduct" id="cartProduct">
    <p>${product.name}</p>
    <p>${product.price}DKK</p>
    <button id="removeItemFromCart" onclick="RemoveFromCart()">X</button>
  </div>
  <hr/>`;
} //Denne funktion trækker info fra json og skriver det ind i html'en
function RemoveFromCart(){
    localStorage.setItem("Order" ,0);
    console.log("cart cleared");
    displayCartItems();
} //remove from cart funktionen sætter Order key'en i localstorage til 0, da dette ikke passer med nogle json objekt productIDs
function displayCartItems() {
    display(loadProduct);
} //kører display funktionen fra ovenfor, men med loadProduct variablen som den variabel der filtreres fra

retrieveProductFromLS(); //retriever productID
displayCartItems(); //kører funktionen så produktet vises
