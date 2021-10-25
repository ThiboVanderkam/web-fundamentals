var firstName = "Phaedra";
var familyName = "Is Sus";
var fullName = firstName + " " + familyName;


console.log(fullName);

var number1 = 5.5;
var number2 = 10;
var sum = number1 + number2;

console.log(sum);

var isLong = true;

/*
    Arrays
*/
var characters = ["Harry Potter", "Ron Weasly", "Hermione Granger", "Voldemort"];

var characters = [
    {
        firstName: "Harry",
        familyName: "Potter"
    },
    {
        firstName: "Ron",
        familyName: "Weasly"
    },
    {
        firstName: "Hermione",
        familyName: "Granger"
    }
]

console.log(characters);

console.log(characters[2]);

var grades = [10, 15, 0, 30, "collin"];


var user = {
    firstName: "collin",
    familyName: "Van der Vorst",
    age: 30,
    isMarried: false,
    animals: [
        "goats",
        "chicken",
        "sheep"
    ]
};

console.log(user.firstName + " " + user.familyName);













//haha 69:P





/*
    Tomorrowland

    Wie mag er binnen?
    Vrouwen die ouder of gelijk zijn dan 18 jaar en jonger zijn dan 30 jaar.
    Wanneer je mij 100 euro geeft, mag je ook binnen
*/

var age = 20;
var geslacht = "man";
var geld = 200;

if (age >= 18 && age < 30 && geslacht == "vrouw")
{
    console.log("ezsqcvghjgtgf");
}
else 
{
    if (geld >= 100) 
    {
        console.log("$$$$$$");
    } 
    else 
    {
        console.log("HAHA POOR!");
    }
}

var number1 = 5;
var number2 = "5";

if (number1 === number2)
{
    console.log("tis tzelfde é");
}
else if (number1 == number2)
{
    console.log("beetje tzelfde é");
}
else 
{
    console.log("nie tzelfde é");
}


var fruit = "appel";

if (fruit == "appel") 
{
    console.log("De appel valt niet ver van de boom");
}
else if (fruit == "peer")
{
    console.log("De peer is nog niet rijp");
}
else if (fruit == "druif")
{
    console.log("Dat is een druif uit zijn mond");
}
else 
{
    console.log("Sorry, ik ken geen zegswijze met dat stuk fruit");
}

switch (fruit) {
    case "appel":
        console.log("De appel valt niet ver van de boom");
        break;
    case "peer":
        console.log("De peer is nog niet rijp");
        break;
    case "druif":
        console.log("Dat is een druif uit zijn mond");
        break;
    default:
        console.log("Sorry, ik ken geen zegswijze met dat stuk fruit");
        break;
}
