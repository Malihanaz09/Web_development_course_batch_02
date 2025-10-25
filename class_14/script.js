console.log(window);
console.log(document);
console.log(document.head);
console.log(document.body);
// get elements by tag name
const heading = document.getElementsByTagName("h1");
console.log(heading);
console.log(heading[0].innerHTML);
console.log(heading[0].innerText);
console.log(heading[1].textContent);

// get element by id
const button = document.getElementById("btn");
console.log(button)

// get elements by class name
const para = document.getElementsByClassName("para");
console.log(para);

// query selector
const firstPara = document.querySelector(".para");
console.log(firstPara);
// query selector all
const allPara = document.querySelectorAll(".para");
console.log(allPara);

// tag name
console.log(heading[0].tagName);

// change heading text
heading[0].innerText = "Hello World!";
console.log(heading[0]);

// change bg color of body
document.body.style.backgroundColor = "lightblue";
// change color of heading
heading[0].style.color = "green";

// create new element
const newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph created using JavaScript.";
console.log(newPara);
// append new element to body
document.body.appendChild(newPara);
// prepend new element to body
const newHeading = document.createElement("h2");
newHeading.innerText = "This is a new heading created using JavaScript.";
document.body.prepend(newHeading);

// create new button
const newButton = document.createElement("button");
newButton.innerText = "New Button";
// use before
let div  = document.getElementsByTagName("div");
div[0].before(newButton);
// use after
let list = document.createElement("ul");
list.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";
div[0].after(list);
// remove element
newButton.remove();

// get attribute
console.log(para[0].getAttribute("class"));
// get attribute of another element
let anotherElement = document.getElementsByTagName("a");
console.log(anotherElement);
console.log(anotherElement[0].getAttribute("href"));

// set attribute
para[0].setAttribute("id", "firstPara");
console.log(para[0]);