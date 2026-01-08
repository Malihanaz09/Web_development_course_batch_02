// add item in todo list
const todoInput = document.getElementById("todoInput");//input element
const addButton = document.getElementById("addBtn");//
const todoList = document.getElementById("todoList");//ul element
console.log(todoInput, addButton, todoList);

addButton.addEventListener("click", function () {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const listItem = document.createElement("li");//create li element
        listItem.textContent = todoText;//input text = li text
        todoList.appendChild(listItem);//ul element k ander add kr den li element ko last me
        todoInput.value = "";//input field empty

        // create a delete button for each todo item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        listItem.appendChild(deleteButton);
        // delete button functionality
        deleteButton.addEventListener("click", function () {
            todoList.removeChild(listItem);
        });
        // create a edit button for each todo item
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        listItem.appendChild(editButton);
        // edit button functionality
        editButton.addEventListener("click", function () {
            const newTodoText = prompt("Edit your todo item:", todoText);
            if (newTodoText) {
                listItem.firstChild.textContent = newTodoText;
            }
        });

    }else{
        alert("Please enter a todo item.");
    }
});


