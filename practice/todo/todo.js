let todoInput = document.getElementById("todoinp");
let addButton = document.getElementById("addtodo");
let clearButton = document.getElementById("cleartodos");
let todoList = document.getElementById("todoList");

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a todo item.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = todoText;

    todoList.appendChild(li);

    todoInput.value = "";
}

function clearAllTodos() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}

addButton.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

clearButton.addEventListener("click", clearAllTodos);