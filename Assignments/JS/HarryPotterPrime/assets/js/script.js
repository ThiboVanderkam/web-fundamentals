
var button = document.querySelector(".js-check-button");
var outputParagraph = document.querySelector("#output-paragraph");
button.addEventListener("click", function() {
    var input = document.querySelector("#input-number").value;

    //Check if input is a number
    if (isNaN(input)) {
        alert("not a number!");
    }
    else {
        isPrime(input);
    }
});

function isPrime(number) {
    var prime = true;
    var output = "";
    for (var i = 1; i <= number; i++) {
        if (number % i == 0 && (i != 1) && (i != number)) {
            if (prime) { //check if the number has not been found out to be a prime number
                output += "false 1 ";
                prime = false;
            }
            output += i + " ";
        }
    }
    if (prime) {
        output += "true";
    }
    else {
        output += number;
    }
    outputParagraph.innerHTML = output;
}