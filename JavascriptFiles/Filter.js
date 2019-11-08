
/*function mensFilter() {
    //Getting checkbox from products filter
    var mensFilter = document.getElementById('mensFilter');
    //getting output
    var mensProducts = document.getElementById('mens');

    if (mensFilter.checked == true){
        mens.style.display = 'block';

    } else {
        mens.style.display = 'none';
    }
}

 */
var mensFilter = document.getElementById('mensFilter');
var womensFilter = document.getElementById('womensFilter');
var childrensFilter = document.getElementById('childrensFilter');

var productPage = document.getElementById('productPage');

function handleChange() {
    var currentlyChecked = [mensFilter, womensFilter, childrensFilter].map(element => element.checked);

    result.innerHTML = JSON.stringify(currentlyChecked);
}
[mensFilter, womensFilter, childrensFilter].forEach(element => element.addEventListener('change', handleChange));

console.log("Filter function succesfully loaded.");