//Denne funksjonen henter elementet username fra html-filen contact.html, slik at den kan lage en personlig alert med brukerens navn når man trykker submit.
function validateContactInformation() {
    var name = document.getElementById(`user_name`).value;


 alert("Hi "+ name + "!"
     + "Thank you for your inquiry! We will contact you as soon as possible.");
}
