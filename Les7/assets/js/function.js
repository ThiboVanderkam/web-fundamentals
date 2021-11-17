var moestuinElement = document.querySelector(".moestuin");
var buttonTomatoElement = document.querySelector(".button-tomato");
var buttonPaprikaElement = document.querySelector(".button-paprika");
var buttonSlaElement = document.querySelector(".button-sla");


/*
buttonTomatoElement.addEventListener("click", function() {
    addToMoestuin("tomaat");
});

buttonPaprikaElement.addEventListener("click", function() {
    addToMoestuin("paprika");
});

buttonSlaElement.addEventListener("click", function() {
    addToMoestuin("sla");
});
*/

var buttons = document.querySelectorAll(".button-add-groente");

for (var index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function() {
        console.log(this.innerHTML);
        addToMoestuin(this.innerHTML);
    });
}

function addToMoestuin(groente) {
    var listItem = document.createElement("li");
    listItem.innerHTML = groente;
    //<li>tomaat</li>

    moestuinElement.append(listItem);
}

var customGroenteButton = document.querySelector(".button-custom-groente");
customGroenteButton.addEventListener("click", function() {
    console.log(document.querySelector("#custom-groente").value);
    var customGroente = document.querySelector("#custom-groente").value
    addToMoestuin(customGroente);
});



