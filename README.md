# ?? 100xDevs Cohort 3 - Web Dev & DevOps Journey

Welcome to my learning repository for the **100xDevs Cohort 3** course by Harkirat Singh. This repository tracks my learning notes, homework assignments, practice projects, and full-stack applications week-by-week.

---

## ??? Weekly Log & Progress Summary

### ?? [Week 01 - Orientation, HTML, CSS, Basic JS](./Week%2001%20-%20Orientation,%20HTML,CSS,Basic%20JS)
- **Topics Covered**: Web Development orientation, HTML5 semantic tags, CSS3 styling, and JavaScript foundations (variables, functions, loops, objects, arrays).
- **Key Learnings**: Responsive layout design, DOM elements structure, and basic JS problem solving.
- **Projects & Assignments**:
  - JavaScript logic & array manipulation exercises.
  - [Zerodha Landing Page Clone](./Week%2001%20-%20Orientation,%20HTML,CSS,Basic%20JS/My%20Projects/zerodha_page/index.html)

---

### ?? [Week 02 - Async JS](./Week%2002%20-%20Async%20JS)
- **Topics Covered**: Asynchronous JavaScript, event loop, callback functions, Node `fs` module, Promises (`.then()`, `.catch()`), and `async/await` syntax.
- **Key Learnings**: Non-blocking I/O, writing custom promise wrappers, handling file read/write asynchronously, and promisifying functions.
- **Projects & Assignments**:
  - Asynchronous timers, file cleaners, and counter exercises.
  - Custom Promise implementations and async file operations.

---

### ?? [Week 03 - DOM & State-Driven Frontends](./Week%2003%20-%20DOM)
- **Topics Covered**: Document Object Model (DOM) selection & manipulation, event listeners, dynamic element creation, and state-driven frontend concepts.
- **Key Learnings**: DOM traversal, event delegation, client-side state rendering, dynamic list updates, and `localStorage` integration.
- **Projects & Assignments**:
  - [Course Todo App Solution](./Week%2003%20-%20DOM/3.1%20-%20DOM%20Simple/Assignment%20Solution/Assignment%207%20Solution%20-%20Todo%20App/index.html)
  - [Practice Todo App with Edit & Filters](./Week%2003%20-%20DOM/My%20Projects/todo-app/index.html)
  - [State-Derived Frontend Demo](./week3_dom/statederived_frontends/index.html)

---

### ?? [Week 04 - Node.js, Express & HTTP Servers](./week%2004%20node.js%20and%20HTTP)
- **Topics Covered**: Node.js runtime environment, HTTP protocol fundamentals, Express.js framework, request/response cycle, route handlers, and middleware concepts.
- **Key Learnings**: Creating RESTful HTTP endpoints (`GET`, `POST`, `PUT`, `DELETE`), parsing JSON request bodies, status codes, query/route parameters, and custom express middlewares.
- **Projects & Assignments**:
  - Node.js file system APIs & CLI tools (`aryan_nodejs`).
  - Express server basics & custom routing (`express_class`).
  - Custom Express Middleware practice (`middleware`, `middleware_assignment`).
  - [Backend Todo Server API](./week%2004%20node.js%20and%20HTTP/week4_todoapp).

---

### ?? [Week 05 - Headers, Fetch API & CORS](./week5)
- **Topics Covered**: HTTP Headers, Browser Fetch API, Axios HTTP client, Cross-Origin Resource Sharing (CORS), preflight requests, and Express `cors` middleware.
- **Key Learnings**: Understanding how browsers enforce CORS policies, communicating between different origins, handling preflight OPTIONS requests, asynchronous data fetching from APIs, and handling response status codes.
- **Projects & Assignments**:
  - CORS configuration & cross-origin request testing (`cors`).
  - Fetch API & Axios request demos (`fetch_api`).
  - Express HTTP Headers & Middleware practice (`middleware_class`).

---

### ?? [Week 06 - Authentication, JWT & Full-Stack Todo App](./week6)
- **Topics Covered**: User Authentication strategies, JSON Web Tokens (JWT), token signing & verification (`jsonwebtoken`), stateful vs. stateless auth, protected route middlewares, and full-stack application integration.
- **Key Learnings**: Hashing/securing credentials, issuing JWTs upon sign-in, attaching tokens to HTTP headers, intercepting requests with JWT auth middleware, storing tokens in browser `localStorage`, and building end-to-end full-stack web applications.
- **Projects & Assignments**:
  - Authentication project & token handling (`auth_project`).
  - [Full-Stack JWT Todo Application](./week6/todo_app) with REST API, Axios frontend, and modern responsive CSS.

---

## ??? How to Run Projects Locally

1. **Frontend HTML/CSS/JS Projects** (Weeks 1 to 3):
   - Navigate to the project directory and open `index.html` in any web browser.

2. **Node.js & Express Backend Projects** (Weeks 4 to 6):
   - Navigate to the specific project directory (e.g. `cd week6/todo_app`).
   - Install dependencies: `npm install`
   - Run the server: `node index.js`
   - Access the server at `http://localhost:3000`.
