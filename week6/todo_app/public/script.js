

async function signup() {

    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    const response = await axios.post("/signup", {
        username: username,
        password: password
    });

    document.getElementById("signup-message").innerText =
        response.data.message;
}

async function signin() {

    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;

    const response = await axios.post("/signin", {
        username: username,
        password: password
    });

    if (response.data.token) {

        // Save JWT in browser
        localStorage.setItem("token", response.data.token);

        document.getElementById("signin-message").innerText =
            "signin successful";

    } else {

        document.getElementById("signin-message").innerText =
            response.data.message;
    }
}



async function createTodo() {

    const title = document.getElementById("todo-title").value;
    const description = document.getElementById("todo-description").value;

    const token = localStorage.getItem("token");

    const response = await axios.post(
        "/todos",
        {
            title: title,
            description: description
        },
        {
            headers: {
                token: token
            }
        }
    );

    document.getElementById("create-todo-message").innerText =
        response.data.message;


    await retrieveTodo();
}




async function retrieveTodo() {

    const token = localStorage.getItem("token");

    const response = await axios.get(
        "/todos",
        {
            headers: {
                token: token
            }
        }
    );

    const todos = response.data.todos;

    document.getElementById("retrieve-todo-message").innerText =
        "Retrieved " + todos.length + " todos";

    const todosDiv = document.getElementById("todos");


    todosDiv.innerHTML = "";

    todos.forEach(function (todo) {

        const todoElement = document.createElement("div");

        todoElement.innerHTML = `
            <h3>${todo.title}</h3>

            <p>${todo.description}</p>

            <p>
                ${todo.isCompleted ? "Completed" : "Not Completed"}
            </p>

            <button onclick="updateTodo(${todo.id})">
                Update
            </button>

            <button onclick="deleteTodo(${todo.id})">
                Delete
            </button>

            <button onclick="updateTodoDone(${todo.id})">
                Mark as Done
            </button>
        `;

        todosDiv.appendChild(todoElement);
    });
}



async function updateTodo(id) {


    const isCompleted =
        document.getElementById("update-todo-isCompleted").checked;

    const token = localStorage.getItem("token");

    const response = await axios.put(
        `/todos/${id}`,
        {
            isCompleted: isCompleted
        },
        {
            headers: {
                token: token
            }
        }
    );

    document.getElementById("update-todo-message").innerText =
        response.data.message;


    await retrieveTodo();
}



async function deleteTodo(id) {

    const token = localStorage.getItem("token");

    const response = await axios.delete(
        `/todos/${id}`,
        {
            headers: {
                token: token
            }
        }
    );

    document.getElementById("delete-todo-message").innerText =
        response.data.message;

    // Refresh Todo list
    await retrieveTodo();
}



async function updateTodoDone(id) {

    const token = localStorage.getItem("token");

    const response = await axios.put(
        `/todos/${id}/done`,
        {},
        {
            headers: {
                token: token
            }
        }
    );

    document.getElementById("update-todo-done-message").innerText =
        response.data.message;


    await retrieveTodo();
}