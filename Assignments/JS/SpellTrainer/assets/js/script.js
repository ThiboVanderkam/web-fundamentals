var button = document.querySelector(".js-train-button");
var counter = 0;
var outputParagraph = document.querySelector("#output-paragraph");
var spellCounter = document.querySelector(".spell-counter");

button.addEventListener("click", function() {
    var input = document.querySelector("#input-spell").value;
    checkSpell(input);
});

function checkSpell(spell) {
    if (spell == "Accio" || spell == "Alohomora" || spell == "Alarte Ascendare") {
        counter++;
        output = "";
        spellCounter.innerHTML = counter;
    }
    else {
        output = "Not a correct spell";
    }
    outputParagraph.innerHTML = output;
}