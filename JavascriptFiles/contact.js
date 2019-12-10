document.getElementById("contactButton").addEventListener("click", dummyAlert);

function dummyAlert() {
    var name = document.getElementById("user_name2");

    if (name.length > 1) {
        alert("Hi " + name + "!"
            + " Thank you for your inquiry! We will contact you via as soon as possible.");
    } else {
            alert("Please provide us with your name! Thank you")
    }
}

