var button = document.querySelector(".js-higher-button");
var image = document.querySelector(".gryffindor");
var position = 0;

button.addEventListener("click", function() {
    position += 20;
    image.style.bottom = position + "px";
});