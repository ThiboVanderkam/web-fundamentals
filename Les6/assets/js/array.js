var persons = [
    {
        name: "Collin",
        age: 30
    },
    {
        name: "Cédric",
        age: 18
    },
    {
        name: "Thibo",
        age: 19
    },
    {
        name: "Robert",
        age: 19
    }
];


console.log(persons[0].name + " is " + persons[0].age + " years old.");
console.log(persons[1].name + " is " + persons[1].age + " years old.");
console.log(persons[2].name + " is " + persons[2].age + " years old.");



for (var index = 0; index < persons.length; index++) {
    if (persons[index].age < 25) {
        console.log(persons[index].name + " is " + persons[index].age + " years old.");
    }
}



var average = 0;
for (var index = 0; index < persons.length; index++) {
    average += persons[index].age;
}
average /= persons.length;
console.log("Average age: " + average);



var people = "";
for (var index = 0; index < persons.length; index++) {
    people += persons[index].name + ", ";
}
console.log(people);



for (var index in persons) {
    console.log(index)
}



var user = {
    name: "Robert",
    age: 19,
    city: "Boom"
};

var aAttributeName = "city";
console.log(user[aAttributeName]);

for (var attributeName in user) {
    console.log(attributeName + " is " + user[attributeName]);

}


