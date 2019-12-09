//behøvede variabler defineres - specifikationer ud for
const productsElement = document.getElementById("productsApp"); //elementet hvori produkter skrives ind
const myProducts = "../products.json"; //stien til products.json defineres
const mensFilter = document.getElementById("mensFilter"); // de tre filtre defineres
const womensFilter = document.getElementById("womensFilter"); // --
const childrensFilter = document.getElementById("childrensFilter"); // --

let data = undefined; //data defineres som undefined, så den kan fetches og ligges ind hvis den mangler

/*Denne funktion viser produkter baseret på den i funktionen definerede type - namely deres køn i dette tilfælde*/
function display(type) {
    if (!data) {
        fetch(myProducts)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                data = json.products;
                display(type);
            });
        return;
    } /*hvis data (defineret ovenfor) er undefined (false), vil denne fetche dataen fra JSON og definere som data.*/

    productsElement.innerHTML = ""; //sørger for at productsElement html elementet er tomt

    if (!type) {
        data.forEach(function(product) {
            productsElement.innerHTML += createProductCard(product);
        });
        Array.from(document.querySelectorAll('button[data-id]')).forEach(function(button) {
            button.addEventListener('click', addToCart);
        });
        return;

    } /*Hele denne funktion er for at loade all products til at starte med,
     samt tilføje eventlisteners til knapperne - derfor if(!type), da type er undefined før filter type defineres nedenfor)*/

    data
        .filter(function(dataset) {
            return dataset.gender === type;
        }) /*Filter på dataen jf. deres type defineret som gender fra JSON*/
        .forEach(function(product) {
            productsElement.innerHTML += createProductCard(product);
        }); /*tager hvert instance fra ovenstående array af products og skriver dem ind i productsElement med createProductsCard(product)*/
    Array.from(document.querySelectorAll('button[data-id]')).forEach(function(button) {
        button.addEventListener('click', addToCart);
    }); //sørger for eventlisteners for addToCart
}
function addToCart() {
    console.log(this.dataset.id);
    this.remove();
    localStorage.setItem("Order" ,this.dataset.id);

}
function createProductCard(product) {
    return `
        <div class="ProductCard">
            <img src="${product.image}" alt="img" />
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <p><button type="button" class="addToCart" data-id="${product.id}" id="${product.id}">Add to Cart</button></p>
        </div>
    `;
}

function displayAll() {
    display();
ButtonsLoaded = true;
}
function displayMens() {
    display("Mens");
    ButtonsLoaded = true;
}
function displayWomens() {
    display("Womens");
    ButtonsLoaded = true;
}
function displayChildrens() {
    display("Childrens");
    ButtonsLoaded = true;
}
function displayMensWomens() {
    //potentielt skal jeg adde 3 eventlisteners (en per knap) og så tre if statement filters der viser den respektive data, derved stacker det dataen
    display("Mens" && "Womens");
}
[mensFilter, womensFilter, childrensFilter].forEach(element =>
    element.addEventListener("change", genderFilter, "")
);
function genderFilter() {
    if (mensFilter.checked) {
        displayMens();
    } else if (womensFilter.checked) {
        displayWomens();
    } else if (childrensFilter.checked) {
        displayChildrens();
    } else if (mensFilter.checked && womensFilter.checked) {
        displayMens();
        displayWomens();
    } else if (mensFilter.checked && childrensFilter.checked) {
        displayMensChildrens();
    } else if (womensFilter.checked && childrensFilter.checked) {
        displayWomensChildrens();
    } else {
        displayAll();
    }
}
displayAll();
