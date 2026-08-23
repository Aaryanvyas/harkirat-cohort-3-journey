let todoCounter = 1;

function addTodo() {
  const inputField = document.getElementById("todo-input");
  const taskText = inputField.value;

  if (taskText.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const todosContainer = document.getElementById("todos");
  
  // Create a container for the new task
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";

  // Create input box showing the task
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.value = taskText;
  taskInput.readOnly = true;
  taskInput.id = "task-" + todoCounter;

  // Create Edit/Save button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = function() {
    if (taskInput.readOnly) {
      taskInput.readOnly = false;
      editButton.textContent = "Save";
      taskInput.focus();
    } else {
      taskInput.readOnly = true;
      editButton.textContent = "Edit";
    }
  };

  // Create Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    todosContainer.removeChild(todoItem);
  };

  // Append elements to item container
  todoItem.appendChild(taskInput);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);

  // Append item container to main list
  todosContainer.appendChild(todoItem);

  // Reset input field and update counter
  inputField.value = "";
  todoCounter++;
}
