// arithmetic operations
let a = 10;
let b = 5;
console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + (a * b)); // 50
console.log("Division: " + (a / b)); // 2
console.log("Modulus: " + (a % b)); // 0
console.log("Exponentiation: " + (a ** b)); // 100000 10x10x10x10x10
console.log("Increment: " + (++a)); // 11
console.log( a++);
console.log("After Increment: " + a); // 12
console.log("Decrement: " + (--b)); // 4

// comparison operations
let x = 20;
let y = "20";
console.log("Equal to: " + (x === y));
console.log("Not equal to: " + (x !== y));

// logical operations
let p = false;
let q = false;
console.log("Logical AND: " + (p && q));
console.log("Logical OR: " + (p || q));
// logical not
console.log("Logical NOT: " + (!p));

// ternary operation
let age = 60;
let result = age > 18 ? "Adult" : "Not Adult";
console.log (result);

// conditional statements
if (age >= 18) {
    console.log("You are an adult.");
}else if (age > 60) {
    console.log("You are a senior citizen.");
}else{
    console.log("You are not an adult.");
}