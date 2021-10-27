var firstname = "Collin";
var familyname = "van der Vorst";
var fullname = firstname + " " + familyname; 


console.log(16 + 4 + "volvo" + 16 + 4);
console.log(16 + 4 + "volvo" + (16 + 4));


var number1 = 5.5;
var number2 = 10;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);

number1++;
number1--;

number1 += 10;

console.log(typeof(number1));


var student1 = "Collin";
var student2 = "Brad";
var student3 = "Julie";


var students = ["Collin", "Brad", "Julie", "Harry", "Ron"];
var grades = [3, 5, 2, 4];
console.log("---array---");
console.log(students);
console.log(students[3]);

var user = {
    username: "collinvd",
    password: "password123",
    isBlocked: false,
    age: 30,
    friends: [
        {
            name: "Budha",
            age: "oud"
        }, 
        {
            name: "Jesus",
            age: "oud"
        }, 
        {
            name: "Allah",
            age: "oud"
        }
    ],
    father: {
        name: "Marc",
        familyname: "van der Vorst"
    }
};

console.log(user.password);
console.log(user.friends[0].name);

if (user.password == "password123") {
    console.log("Zijn password is geldig");
}
else if (user.username == "collinvdv") {
    console.log("Hallo Collin!");
}
else {
    console.log("password is niet geldig");
}

var number1 = 5;
var number2 = "5";

if (number1 === number2) {
    console.log("nummers gelijk");
}
else {
    console.log("nummers hebben geen gelijk teken")
}


var fruit = "orange";

switch (fruit) {
    case "orange":
        console.log("lekker!");
        break;
    case "apple":
        console.log("ook lekker!");
        break;
    default:
        console.log("kennek nie");
        break;
}


