var likeButton = document.querySelector(".like-button");
var dislikeButton = document.querySelector(".dislike-button");
var header = document.querySelector(".header");
var image = document.querySelector(".profile-picture");
var page = document.querySelector(".page");
var counter = 0; //used to loop through the characters in the people array

var people = [
    {
        name: "Harry Potter",
        image: "assets/images/harrypotter.jpeg",
        liked: "" //"" is used as a placeholder
    },
    {
        name: "Hermoine Granger",
        image: "assets/images/hermione.jpeg",
        liked: "" 
    },
    {
        name: "Ronald Bilius Weasley",
        image: "assets/images/ronald.jpeg",
        liked: "" 
    },
    {
        name: "Ginny Weasley",
        image: "assets/images/ginny.jpeg",
        liked: "" 
    }
];


likeButton.addEventListener("click", function() {
    tinderSwipe("like");
});
    
dislikeButton.addEventListener("click", function() {
    tinderSwipe("dislike");
});

function tinderSwipe(likeDislike) {
    if (counter == people.length - 1) { //if all people have been displayed, show end results
        people[counter].liked = likeDislike;
        showResult();
    }
    else {
        people[counter].liked = likeDislike;

        //setup for next person
        counter++;
        header.innerHTML = people[counter].name;
        image.setAttribute("src", people[counter].image);
        
        
    }
    
}

function showResult() {
    header.remove();
    image.remove();
    likeButton.remove();
    dislikeButton.remove();
    
    var result = document.createElement("p");
    var likedPeople = [];
    var dislikedPeople = [];

    for (var i = 0; i < people.length; i++) {
        if (people[i].liked == "like") {
            likedPeople.push(people[i].name);    
        }
        else {
            dislikedPeople.push(people[i].name);
        }
    }

    result.innerHTML = "The end <br>Likes: " + likedPeople + "<br>Dislikes: " + dislikedPeople;
    page.append(result);

}


        
