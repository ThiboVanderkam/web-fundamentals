var carElement = document.querySelector(".js-car");
var carElements = document.querySelectorAll(".js-car");

var positionCar = 0;

carElement.addEventListener("click", function() {
    positionCar += 10;
    carElement.style.marginLeft = positionCar + "px";
});

var buttonElement = document.querySelector(".js-button-drive-cars");
console.log(buttonElement);

buttonElement.addEventListener("click", function() {
    positionCar += 10;
    for(var index = 0; index < carElements.length; index++) {
        carElements[index].style.marginLeft = positionCar + "px";
    }
});