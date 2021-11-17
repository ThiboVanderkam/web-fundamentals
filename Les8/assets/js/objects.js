var user = {
    username: "collinvdv",
    password: "test123",
    firstName: "Collin",
    lastName: "Van der Vorst",
    age: 30,
    partner: {
        name: "Lisa"
    },
    isHappy: true,
    animals: [
        "pepper",
        "kamiel",
    ],
    getNameOfPartner: function() {
        console.log(this.partner.name);
    },
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(user.username);
var propertyName = "username";
console.log(user[propertyName]);

console.log(user.partner.name);
user.getNameOfPartner();
console.log(user.getFullName());
