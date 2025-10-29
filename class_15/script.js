// onclick event handler
let btn = document.getElementById("btn");
btn.onclick = function() {
   console.log("Button was clicked!");
    btn.style.backgroundColor = "green";
    btn.innerText = "Clicked";
}

// ondblclick event handler
btn.ondblclick = function() {
    console.log("Button was double clicked!");
    btn.style.backgroundColor = "red";
    btn.innerText = "Double Clicked";
}

// onmouseover event handler
btn.onmouseover = function() {
    console.log("Mouse is over the button!");
    btn.style.backgroundColor = "orange";
}

// onmouseout event handler
btn.onmouseout = function() {
    console.log("Mouse is out of the button!");
    btn.style.backgroundColor = "pink";
}

// keydown event handler
document.onkeydown = function(event) {
    console.log("Key down: " + event.key);
}

// keyup event handler
document.onkeyup = function(event) {
    console.log("Key up: " + event.key);
}

// submit event handler
let form = document.getElementById("myForm");
form.onsubmit = function(event) {
    event.preventDefault();
    console.log("Form submitted!");
    let name = document.getElementById("name").value;
    console.log("Name: " + name);
}

// focus event handler
let input = document.getElementById("name");
input.onfocus = function() {
    console.log("Input field focused!");
}

// change event handler
input.onchange = function(event) {
    console.log("Input changed: " + event.target.value);
}
// load event handler
window.onload = function() {
    console.log("Window loaded!");
}

// addEventListener method
btn.addEventListener("click", function() {
    console.log("Button clicked using addEventListener!");
    btn.style.backgroundColor = "purple";
    btn.innerText = "Clicked via addEventListener";
});


let btn2 = document.getElementById("btn2");
let removeBtn = document.getElementById("removeBtn");

function showMessage() {
  alert("Button Clicked!");
}
// Add event
btn2.addEventListener("click", showMessage);

// Remove event when 'remove' button is clicked
removeBtn.addEventListener("click", function() {
  btn2.removeEventListener("click", showMessage);
  alert("Click event removed!");
});

// event object
btn2.addEventListener("click", function(event) {
    console.log("Event Type: " + event.type);
    console.log("Event Target: " + event.target.id);
    console.log("Event client: " + event.clientX + ", " + event.clientY);

});












