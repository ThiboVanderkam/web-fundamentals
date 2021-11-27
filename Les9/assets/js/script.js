//console.log("script.js is loaded");

// var user = {
//     firstname: "Collin",    //properties
//     lastname: "Vv",     //properties
//     getFullname: function(){        //method
//         console.log(this.firstname + " " + this.lastname)
//     }
// }

// user.getFullname();     //dit is de method getFullname in user oproepen

var now = new Date();

var birthdate = new Date(1991, 4, 16);
//jaar, maand, dag --> ! ! ! maand telt hij van 0-11 dus als 0 is januari, 4 is mei
var geboren = new Date(1999, 0, 13, 13, 5, 0);

console.log(now);
console.log(birthdate);
console.log(geboren);

console.log(birthdate.getDate());   //geeft de dag terug = 16
console.log(birthdate.getMonth());   //geeft de maand terug = 4 --> mei
console.log(birthdate.getFullYear());   //geeft het jaar terug = 1991

console.log(geboren.getDay());   //geeft terug welke dag van de week
// ! ! ! begint bij zondag = 0, maandag = 1, ...

var birthdateAsString = new Date("1991-04-16");
//hij zal herkennen dat 04 = april en het intern aanpassen voor zichzelf naar 3 om mee te werken



//OPDRACHT: van elk jaar weergeven op welke dag hij verjaart

console.log("opdracht");

//get the user his/her birthday
var inputDate = document.querySelector("#date-of-birth");
var buttonDate = document.querySelector(".button-date");

//console.log(inputDate);
//console.log(buttonDate);

buttonDate.addEventListener("click", function(){
    //console.log("goed gelinkt");
    var geboortedatum = new Date(inputDate.value);
    console.log(geboortedatum);

    calculateDaysOfWeek(geboortedatum);
})

function calculateDaysOfWeek(geboortedatum) {       //geboortdedatum is een variabele die in de functie wordt gebruikt, maar je nergens gedeclareerd hebt, deze moet je dan ook invullen als je de functie oproept in de addEventListener

    //var geboortedatum = new Date(1991, 3, 16);
    var nu = new Date();
    
    var geboortejaar = geboortedatum.getFullYear(); //1991
    var nujaar = nu.getFullYear();  //2021
    
    //console.log(geboortejaar);
    //console.log(nujaar);
    
    var daysOfWeek = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ]
    
    for(var year = geboortejaar; year <= nujaar; year++) {
        //console.log(year);
        var date = new Date(year, geboortedatum.getMonth(), geboortedatum.getDate());
        //console.log(date);
        //console.log(date.getDay());
    
        console.log(date.getFullYear() + ": " + daysOfWeek[date.getDay()]);
    }

}


//output:
// 1991: tuesday
// 1992: thursday
// ...
// 2021: thursday