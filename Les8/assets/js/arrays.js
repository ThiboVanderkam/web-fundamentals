var users = [
    "ibrahim",
    "tom",
    "john",
    "lisa"
];


for (var index = 0; index < users.length; index++) {
    console.log(users[index]);
}

for (var index in users) {
    console.log(users[index]);
}

var characters = "harry,ron,hermione";
console.log(characters.split(","));

console.log(users.join(","));

users.push("obama"); //--> add item to end of array
// users.unshift() --> add item to beginning of array
users.splice(users.length-3, 3);

users.pop();
users.shift();
console.log(users);