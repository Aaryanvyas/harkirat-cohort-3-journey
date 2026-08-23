/* ==========================================================================
   Simple Todo App Logic
   ========================================================================== */

// 1. Application State
// Load initial state from LocalStorage or default to empty list
let todos = JSON.parse(localStorage.getItem('todos')) || [
    { title: "Read Week 3 Notes", completed: false },
    { title: "Complete HTML/CSS Homework", completed: true },
    { title: "Practice Javascript loops", completed: false }
];

let currentFilter = 'all'; // 'all' | 'active' | 'completed'
let editIndex = null;      // Holds the index of the task being edited

// Cache DOM elements
const todoInput = document.getElementById("todo-input");
const todosContainer = document.getElementById("todos");
const itemsLeftSpan = document.getElementById("items-left");
const editModal = document.getElementById("edit-modal");
const editInput = document.getElementById("edit-input");

// Listen for Enter key on the add todo input
todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

// Listen for Enter key on the edit todo input
editInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        saveEdit();
    }
});


// 🔵 2. State Mutation Actions

// Add task to state
function addTodo() {
    const titleText = todoInput.value.trim();
    if (titleText === "") {
        return;
    }

    // Push new task object to the state array
    todos.push({
        title: titleText,
        completed: false
    });

    // Clear input
    todoInput.value = "";

    // Synchronize UI with modified state
    render();
}

// Delete task from state
function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}

// Toggle complete status
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    render();
}

// Set active filter
function setFilter(filter) {
    currentFilter = filter;
    
    // Update filter button active states
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    document.getElementById(`filter-${filter}`).classList.add("active");

    render();
}

// Open modal for editing task
function openEditModal(index) {
    editIndex = index;
    editInput.value = todos[index].title;
    editModal.classList.add("active");
    editInput.focus();
}

// Close edit modal
function closeEditModal() {
    editIndex = null;
    editModal.classList.remove("active");
}

// Save modified task title
function saveEdit() {
    const newTitle = editInput.value.trim();
    if (newTitle !== "" && editIndex !== null) {
        todos[editIndex].title = newTitle;
        closeEditModal();
        render();
    }
}


// 🟠 3. UI Component Creator
// Given state info (todo object) and its position (index), create the complete DOM node
function createTodoElement(todo, originalIndex) {
    // 1. Main row container
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    if (todo.completed) {
        todoItem.classList.add("completed");
    }

    // 2. Left content wrapper (Checkbox + Title)
    const todoLeft = document.createElement("div");
    todoLeft.className = "todo-left";

    // 3. Custom Checkbox element
    const checkbox = document.createElement("div");
    checkbox.className = "custom-checkbox";
    checkbox.onclick = function () {
        toggleTodo(originalIndex);
    };

    // 4. Todo Title element
    const titleSpan = document.createElement("span");
    titleSpan.className = "todo-title";
    titleSpan.innerText = todo.title;
    titleSpan.onclick = function () {
        toggleTodo(originalIndex);
    };

    todoLeft.appendChild(checkbox);
    todoLeft.appendChild(titleSpan);

    // 5. Right Action Buttons (Edit + Delete)
    const todoActions = document.createElement("div");
    todoActions.className = "todo-actions";

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.className = "action-btn btn-edit";
    editBtn.innerHTML = "✎"; // Styled pencil symbol
    editBtn.title = "Edit Task";
    editBtn.onclick = function () {
        openEditModal(originalIndex);
    };

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "action-btn btn-delete";
    deleteBtn.innerHTML = "✕"; // Styled cross symbol
    deleteBtn.title = "Delete Task";
    deleteBtn.onclick = function () {
        deleteTodo(originalIndex);
    };

    todoActions.appendChild(editBtn);
    todoActions.appendChild(deleteBtn);

    // Assembly
    todoItem.appendChild(todoLeft);
    todoItem.appendChild(todoActions);

    return todoItem;
}


// 🟣 4. Render Logic (The Bridge between State and DOM)
function render() {
    // Clear old UI nodes in the container
    todosContainer.innerHTML = "";

    let visibleItemsCount = 0;

    // Iterate state list and render if passes filter criteria
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        
        let shouldRender = false;
        if (currentFilter === 'all') {
            shouldRender = true;
        } else if (currentFilter === 'active' && !todo.completed) {
            shouldRender = true;
        } else if (currentFilter === 'completed' && todo.completed) {
            shouldRender = true;
        }

        if (shouldRender) {
            const element = createTodoElement(todo, i);
            todosContainer.appendChild(element);
            visibleItemsCount++;
        }
    }

    // Display Empty state when list is empty for filter
    if (visibleItemsCount === 0) {
        const emptyState = document.createElement("div");
        emptyState.className = "empty-state";
        
        let icon = "✨";
        let message = "All caught up!";
        
        if (currentFilter === 'completed') {
            icon = "✓";
            message = "No completed tasks yet.";
        } else if (currentFilter === 'active') {
            icon = "☕";
            message = "No active tasks right now.";
        } else {
            icon = "📝";
            message = "Your task list is empty. Add a task above!";
        }

        emptyState.innerHTML = `
            <div class="empty-state-icon">${icon}</div>
            <p>${message}</p>
        `;
        todosContainer.appendChild(emptyState);
    }

    // Calculate items left (active tasks count)
    const activeTasksCount = todos.filter(t => !t.completed).length;
    itemsLeftSpan.innerText = `${activeTasksCount} item${activeTasksCount !== 1 ? 's' : ''} left`;

    // Persist current state in localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 🚀 5. Initial Page Render
render();
