// // arithmetic operations
// let a = 10;
// let b = 5;
// console.log("Addition: " + (a + b)); // 15
// console.log("Subtraction: " + (a - b)); // 5
// console.log("Multiplication: " + (a * b)); // 50
// console.log("Division: " + (a / b)); // 2
// console.log("Modulus: " + (a % b)); // 0
// console.log("Exponentiation: " + (a ** b)); // 100000 10x10x10x10x10
// console.log("Increment: " + (++a)); // 11
// console.log( a++);
// console.log("After Increment: " + a); // 12
// console.log("Decrement: " + (--b)); // 4

// // comparison operations
// let x = 20;
// let y = "20";
// console.log("Equal to: " + (x === y));
// console.log("Not equal to: " + (x !== y));

// // logical operations
// let p = false;
// let q = false;
// console.log("Logical AND: " + (p && q));
// console.log("Logical OR: " + (p || q));
// // logical not
// console.log("Logical NOT: " + (!p));

// // ternary operation
// let age = 60;
// let result = age > 18 ? "Adult" : "Not Adult";
// console.log (result);

// // conditional statements
// if (age >= 18) {
//     console.log("You are an adult.");
// }else if (age > 60) {
//     console.log("You are a senior citizen.");
// }else{
//     console.log("You are not an adult.");
// }



// arithemetic operations
let a = 6;
let b = 2;
console.log("Addition: " + (a + b)); // 8
console.log("Subtraction: " + (a - b)); // -4
console.log("Multiplication: " + (a * b)); // 12
console.log("Division: " + (a / b)); // 0.3333

// modulus
console.log("Modulus: " + (a % b)); // 0

// exponentiation
console.log("Exponentiation: " + (a ** b)); // 36

// unary operations
// increment
console.log("Increment: " + (++a));//pre-increment
// a+1 = 7
// post-increment
console.log("Post Increment: " + (a++));
console.log("After Post Increment: " + (a));

// decrement
console.log("Decrement: " + (--b));//pre-decrement
// b-1 = 1
// post-decrement
console.log("Post Decrement: " + (b--));//
console.log("After Post Decrement: " + (b));

// comparison operations
let x = 12;
let y = "12";
console.log("Equal to: " + (x == y));
console.log("Equal to: " + (x === y));

console.log("Not equal to: " + (x != y));
console.log("Not equal to: " + (x !== y));

// logical operations
let p = false;
let q = false;
console.log("Logical OR: " + (p || q));
console.log("Logical AND: " + (p && q));

// logical NOT
console.log("Logical NOT: " + (!p));

// ternary operation
let age = 68;
let result = age > 18 ? "Adult" : "Not Adult";
console.log(result);

// if conditional statements
if (age >= 18 && age < 60) {
    console.log("You are an adult.");
}
        
// if-else conditional statements
if (age >= 18 && age < 60) {
    console.log("You are an adult.");
}else {
    console.log("You are not an adult.");
}

// else-if conditional statements
if (age >= 18 && age < 60) {
    console.log("You are an adult.");
}else if (age >= 60) {
    console.log("You are a senior citizen.");
}else {
    console.log("You are not an adult.");
}

// function 
function myFunction() {
    console.log("This is my function.");
}
myFunction();
myFunction();
myFunction();

// function with parameters
function multiply(x, y) {
   console.log (x * y);
}
 multiply(6, 6);
multiply(7, 8);

// arrow function ()=>
const add = (x, y) => {
    console.log(x + y);
}
add(10, 5);
add(20, 30);

// array
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

// accessing array elements
console.log(fruits[0]);
console.log(fruits[1]);

// array methods
fruits.push("Mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Grapes");
console.log(fruits);
// length of array
console.log("Length of fruits array: " + fruits.length);
// filter method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers: " + evenNumbers);
// map method
let squaredNumbers = numbers.map(num => num ** 2);
console.log("Squared Numbers: " + squaredNumbers);
// join method
let joinedFruits = fruits.join(", ");
console.log("Joined Fruits: " + joinedFruits);
//concatenate arrays
let moreFruits = ["Pineapple", "Peach"];
let allFruits = fruits.concat(moreFruits);
console.log("All Fruits: " + allFruits);
// splice method
allFruits.splice(2, 1, "Kiwi");
console.log("After Splice: " + allFruits);
// slice method
let citrusFruits = allFruits.slice(2, 4);
console.log("Citrus Fruits: " + citrusFruits);