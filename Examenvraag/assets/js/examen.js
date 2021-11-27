//console.log("verbonden");

var characters = [
    "ron",
    "harry",
    "hermione",
    "voldemort"
];

//8 kaarten maken met 2 keer hetzelfde personage
var cards = [];

for (var index = 0; index < characters.length; index++) {
    cards.push(characters[index]);  //.push zal een nieuw item toevoegen aan de array cards
    cards.push(characters[index]);
}

//volgorde shuffelen
cards = cards.sort(() => Math.random() - 0.5);

//console.log(cards); //controleren of er 8 items in cards zit --> OK

//kaarten toevoegen aan onze game
var gameElement = document.querySelector("#game");
for (var index = 0; index < cards.length; index++) {
    
    //creating seperate card element
    var cardElement = document.createElement("div");    //<div></div>
    cardElement.classList.add("card");  //<div class="card"></div>
    cardElement.innerHTML = cards[index];  //<div class="card">harry</div>
    cardElement.dataset.person = cards[index]; //<div class="card" data-person="harry">harry</div>

    //console.log(cardElement); //een div die je maakt en dan in html kan toevoegen

    //add to game
    gameElement.append(cardElement);

    //we willen nu ipv tekst met namen, het zien in kaartvorm --> overgaan naar css
}

//we komen terug uit css om tekst te tonen als we op de kaarten klikken
//je mag maar 2 kaarten per keer aanduiden, dan moet het stoppen
var cardElements = document.querySelectorAll(".card"); //[element1, element2, ...]
var selectedCards = [];
var failedElement = document.querySelector("#failed-attempts");
var failedAttempts = 0;


for (var index = 0; index < cardElements.length; index++){
    cardElements[index].addEventListener("click", function(){
        
        //console.log("je klikte op een kaart");
        
        if (selectedCards.length < 2){
            
            //zorgen dat je geen omgedraaide kaart meer kan selecteren
            
            if(this.classList.contains("succes") == false){
            
                this.classList.add("visible");    //this om te gebruiken waar er op geklikt werd   
                selectedCards.push(this); //we pushen hier pas, dus als je op de eerste kaart gedrukt hebt, zal de length nog nul zijn tot we bij deze stap komen
            
            }

        }
            

        if (selectedCards.length == 2) {
            
            //ik wil checken of het dezelfde zijn
            
            if(selectedCards[0].dataset.person == selectedCards[1].dataset.person) {
                console.log("ze zijn hetzelfde");
                selectedCards[0].classList.add("succes");
                selectedCards[1].classList.add("succes");
                
                selectedCards = []; //terug leegmaken anders kan je er geen extra meer aanklikken
                    
            } else {
                console.log("probeer nog eens");
              
                // kaart onzichtbaar maken en selectedCards leeg maken
                setTimeout(function(){
              
                    selectedCards[0].classList.remove("visible");
                    selectedCards[1].classList.remove("visible");
                    
                    selectedCards = []; //leegmaken
                }, 2000);
                
                failedAttempts++;
                failedElement.innerHTML = failedAttempts;
            }
        } 

        console.log(selectedCards);
    });
}
