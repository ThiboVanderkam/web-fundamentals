var button = document.querySelector(".js-scream-button");
button.addEventListener("click", function() {
    var input = document.querySelector("#input-number").value;
    if (input == "") {
        alert("No input given!")
    }
    else {
        alert(input);
    }
});