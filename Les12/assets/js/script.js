//console.log("loaded");

var characters = [
    {
        name: "Gringer",
        image: "gringer.png"
    },
    {
        name: "Hermoine",
        image: "hermione.png"
    },
    {
        name: "Sneep",
        image: "sneep.png"
    },
    {
        name: "Voldemort",
        image: "voldemort.png"
    }
];


var characterNameElement = document.querySelector("#character-name");
var characterImageElement = document.querySelector("#character-image");
var buttonLikeElement = document.querySelector("#button-like");
var buttonDislikeElement = document.querySelector("#button-dislike");
var activeIndex = 0;

var likes = [];
var dislikes = [];

//load first char
changeCharacter();

//event linking
buttonLikeElement.addEventListener("click", function(){
    like(true);
})
buttonDislikeElement.addEventListener("click", function(){
    like(false);
})

//change character function
function changeCharacter(){
    var activeCharacter = characters[activeIndex]; //name: en image:
    characterNameElement.innerHTML = activeCharacter.name;
    characterImageElement.setAttribute("src", "assets/images/" + activeCharacter.image)
}

function like(isLiked){
    var activeCharacter = characters[activeIndex];
    if (isLiked){
        likes.push(activeCharacter.name);
    }
    else{
        dislikes.push(activeCharacter.name);
    }
    activeIndex++;

    //show naxt char
    if (activeIndex == characters.length){
        endGame();
    }
    else{
        changeCharacter();
    }

}

function endGame() {
    document.querySelector("#tinder").classList.add("hide");

    var likeElement = document.createElement("p");
    likeElement.innerHTML = "likes:" + likes.toString();

    var dislikeElement = document.createElement("p");
    dislikeElement.innerHTML = "dislikes:" + dislikes.toString();

    var resultsElement = document.querySelector("#results");
    resultsElement.appendChild(likeElement);
    resultsElement.appendChild(dislikeElement);
}