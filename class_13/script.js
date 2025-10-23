// object 
const person = {
    name: "Ali",
    age: 30,
    city: "Karachi"
};
console.log(person);
// print only name
console.log(person.name);
console.log(person.age);
console.log(person.city);

// add new property
person.country = "Pakistan";
console.log(person);
// read property using bracket notation
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

// update property
person.age = 31;
console.log(person);
// update using bracket notation
person["city"] = "Lahore";
console.log(person);

// delete property
delete person.country;
console.log(person);

// print windows object
console.log(window);
// print document object
console.log(document);