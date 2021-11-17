var buttonTomato = document.querySelector(".js-button-tomato");
var buttonPaprika = document.querySelector(".js-button-paprika");
var moestuinElement = document.querySelector(".js-moestuin");

buttonTomato.addEventListener("click", function() {
    //moestuinElement.innerHTML= "<div class=\"tomato\"></div>";
    var tomato = document.createElement("div");
    tomato.classList.add("tomato");
    tomato.classList.add("is-active");
    //tomato.innerHTML = "tomato in den div";
    console.log(tomato);
    moestuinElement.append(tomato);
});

buttonPaprika.addEventListener("click", function(){
    var paprika = document.createElement("div");
    paprika.classList.add("paprika");

    moestuinElement.append(paprika);
});

