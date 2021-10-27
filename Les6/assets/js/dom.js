/*
console.log(document);

document.write("<p> deze tekst komt van js</p>");

console.log(document.querySelector("button"));
console.log(document.getElementById("homepage-title"));
*/

//querrySelector is enkel belangrijk!

/*
var buttonElement = document.querySelector(".button"); //enkel eerste .button element
var buttonElements = document.querySelectorAll((".button")[0]); //alle .button elementen

//buttonElement.innerHTML = "Aangepast door js";

for (var index in buttonElements) {
    buttonElements[index].innerHTML = "Aangepast door js";
    buttonElements[index].innerHTML = "Aangepast door js";
}


console.log(buttonElement);
console.log(buttonElements);

console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByClassName("button"));
*/

/*
var buttonElement = document.querySelector(".button");
buttonElement.addEventListener("click", function() {
    console.log("geklikt");
});
*/

var buttonElement = document.querySelector(".button");
var counterElements = document.querySelectorAll(".counter");
var counter = 0;

buttonElement.addEventListener("click", function() {
    counter++;
    for (var index in counterElements)
    counterElements[index].innerHTML = counter;
});

