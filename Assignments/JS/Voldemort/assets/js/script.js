var image = document.querySelector(".js-voldemort");
var imagePosition = document.querySelector(".css-voldemort");
var rightBound = window.innerWidth - image.naturalWidth;
var topBound = window.innerHeight - image.naturalHeight;

image.addEventListener("mouseover", function() {
    var bottomLocation = Math.random() * topBound;
    var leftLocation = Math.random() * rightBound;
    imagePosition.style.bottom = bottomLocation + "px";
    imagePosition.style.left = leftLocation + "px";
});