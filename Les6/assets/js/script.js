//tellen van 1 tot honderd

for (var number = 1; number <= 100; number++) {
    console.log(number);
}



//geef mij alle even getallen van 1 tot 100

for (var i = 0; i <= 100; i += 2) {
    console.log(i);
}



// while loop
// wachtwoord password123
var user = {
    username: "collinvdv",
    password: "password123"
};



var password = prompt("Give ma yah password");
console.log(password);

while (password != user.password) {
    console.log("t is niet gelijk, geef mij een nieuw wachtwoord");
    
    password = prompt("Give ma yah password");
}


var password = "";
do {
    password= prompt("Give ma yah password");
} while (password !=user.password);



//Welkom gebruiker
console.log("welkom!");


