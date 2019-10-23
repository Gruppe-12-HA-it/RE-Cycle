// noen forhåndsdefinerte brukernavn:
var objPeople =[
    {
        username: "astridlarsen",
        password: "ha_it"
    },
    {
        username: "mikkelfetterlein",
        password: "mikkel28"
    },
    {
        username: "sebastianteglhus",
        password: "love2code"
    }

]

    function validate() {
        var username = document.getElementById("username").value;
        var password =document.getElementById("password").value;


        if(username=="" || password=="" ){
            alert("No blanks allowed");
        }

    for(i=0; i<objPeople.length; i++) {

        if(username==objPeople[i].username&&password==objPeople[i].password) {
            alert(username + " is logged in!")
        }
    }

}
