var tomaatElement = document.querySelector(".tomaat");
tomaatElement.style.backgroundColor = "red";

tomaatElement.parentElement.style.backgroundColor = "green";
tomaatElement.parentElement.style.padding = "20px";

var moestuinElement = document.querySelector(".moestuin");
console.log(moestuinElement.children);

//.innerHtml = ""; wijzigt html in het element
//.style.backgroundCOlor = ""; wijzigt css
//.classList.add("is-active"); 
//.classList.remove("is-active");
//.addEventListener("event", function());
//.parentElement geeft de referentie van de parent terug
//.children()
//.setAttribute

tomaatElement.setAttribute("id", "tomaatje");
moestuinElement.removeChild(tomaatElement);

var slaElement = document.createElement("div");
slaElement.classList.add("sla");
slaElement.innerHTML = "sla";

moestuinElement.append(slaElement);


console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);