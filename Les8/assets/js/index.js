// user definieren and hardcoded credentials meegegeven
var user = {
    username: "collinvdv",
    password: "test123"
};

var buttonElement = document.querySelector(".button-login");
var inputUsernameElement = document.querySelector("#input-username");
var inputPasswordElement = document.querySelector("#input-password");
var bodyElement = document.querySelector("body");
var amountOfMistakes = 0;


buttonElement.addEventListener("click", function() {
    var givenUsername = inputUsernameElement.value;
    var givenPassword = inputPasswordElement.value;
    
    if (givenUsername == user.username && givenPassword == user.password) {
        
        changeBodyAuthentication(true);
        amountOfMistakes = 0;
    }
    else {
        changeBodyAuthentication(false);

        amountOfMistakes++;
        var errorElement = document.createElement("p");
        errorElement.innerHTML = "The amount of mistakes is: " + amountOfMistakes;
        bodyElement.append(errorElement);
    }   
});

function changeBodyAuthentication(isAuthenticated) {
    if (isAuthenticated) {
        bodyElement.classList.remove("not-authenticated");
    bodyElement.classList.add("authenticated");
    }
    else {
        bodyElement.classList.remove("authenticated");
        bodyElement.classList.add("not-authenticated");
    }
}