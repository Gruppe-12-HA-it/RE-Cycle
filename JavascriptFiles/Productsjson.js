const productsElement = document.getElementById("productsApp");
const myProducts = "../products.json";
const mensFilter = document.getElementById("mensFilter");
const womensFilter = document.getElementById("womensFilter");
const childrensFilter = document.getElementById("childrensFilter");

let data = undefined;

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
    }

    productsElement.innerHTML = "";

    if (!type) {
        data.forEach(function(product) {
            productsElement.innerHTML += createProductCard(product);
        });
        return;
    }

    data
        .filter(function(dataset) {
            return dataset.gender === type;
        })
        .forEach(function(product) {
            productsElement.innerHTML += createProductCard(product);
        });
}
function createProductCard(product) {
    return `
        <div class="ProductCard">
            <img src="${product.image}" alt="img" />
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <p><button type="button" class="addToCard">Add to Cart</button></p>
        </div>
    `;
}

function displayAll() {
    display();
}
function displayMens() {
    display("Mens");
}
function displayWomens() {
    display("Womens");
}
function displayChildrens() {
    display("Childrens");
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
