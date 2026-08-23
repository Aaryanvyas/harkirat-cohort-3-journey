function addTodo() {
  const input = document.getElementById("todo-input");
  const taskText = input.value;

  if (taskText.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const todosContainer = document.getElementById("todos");

  // Create the todo item row
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";

  // Create the left container (Checkbox + Text)
  const todoLeft = document.createElement("div");
  todoLeft.className = "todo-left";

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.onchange = function () {
    if (checkbox.checked) {
      todoItem.classList.add("completed");
    } else {
      todoItem.classList.remove("completed");
    }
  };

  // Task Text
  const todoText = document.createElement("span");
  todoText.className = "todo-text";
  todoText.textContent = taskText;

  todoLeft.appendChild(checkbox);
  todoLeft.appendChild(todoText);

  // Create the right container (Edit + Delete buttons)
  const todoRight = document.createElement("div");
  todoRight.className = "todo-right";

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.className = "btn-edit";
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    const newText = prompt("Edit your task:", todoText.textContent);
    if (newText !== null && newText.trim() !== "") {
      todoText.textContent = newText;
    }
  };

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    todosContainer.removeChild(todoItem);
  };

  todoRight.appendChild(editBtn);
  todoRight.appendChild(deleteBtn);

  // Assemble the row
  todoItem.appendChild(todoLeft);
  todoItem.appendChild(todoRight);

  // Append to the list
  todosContainer.appendChild(todoItem);

  // Clear input
  input.value = "";
}
