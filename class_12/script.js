// function
function myFunction() {
    console.log("This is my function!");
}
// calling the function
myFunction();

// function with parameters
function addNumbers(num1, num2) {
    return num1 + num2;
}
// calling the function with arguments
let sum = addNumbers(5, 10);
console.log("Sum:", sum);

// arrow function
const multiplyNumbers = (num1, num2) => {
    return num1 * num2;
};
// calling the arrow function
let product = multiplyNumbers(5, 12);
console.log("Product:", product);

// array method
const numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);
// array length
console.log("Array length:", numbers.length);
// push method
numbers.push(6);
console.log("Array after push:", numbers);
// unshift method
numbers.unshift(0);
console.log("Array after unshift:", numbers);
// pop method
numbers.pop();
console.log("Array after pop:", numbers);
// shift method
numbers.shift();
console.log("Array after shift:", numbers);
// filter method
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// map method
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);
// join method
const joinedNumbers = numbers.join(", ");
console.log("Joined numbers:", joinedNumbers);
// concat method
const moreNumbers = [6, 7, 8];
const allNumbers = numbers.concat(moreNumbers);
console.log("Concatenated array:", allNumbers);
// flat method
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log("Flattened array:", flatArray);
// slice method
const slicedArray = numbers.slice(1, 4);
console.log("Sliced array:", slicedArray);
// splice method
const splicedArray = numbers.splice(2, 2, 10, 11);
console.log("Spliced array:", splicedArray);
console.log("Array after splice:", numbers);

// for loop 
for (let i = 0; i <=10 ; i++) {
    console.log("For loop iteration:", i);
}
// while loop
let j = 0;
while (j < 5) {
    console.log("While loop iteration:", j);
    j++;
}
// do...while loop
let k = 0;
do {
    console.log("Do...while loop iteration:", k);
    k++;
} while (k < 3);