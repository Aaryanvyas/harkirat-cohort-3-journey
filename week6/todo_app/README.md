# 🚀 Week 6 - Full-Stack JWT Authenticated Todo Application

Welcome to the **Week 6 Assignment** of Harkirat Cohort 3. This project is a complete **Full-Stack Todo Web Application** built with Node.js, Express, JSON Web Tokens (JWT), Axios, HTML5, and CSS3.

---

## 🌟 Key Concepts & Tech Stack Demonstrated

### 1. **Authentication & Authorization (JWT)**
- **Stateless Authentication**: Uses `jsonwebtoken` (JWT) to sign and verify user identity tokens upon successful sign-in.
- **Custom Auth Middleware**: Implemented `authMiddleware` in Express to intercept protected routes (`/todos`), extract the `token` header, verify its signature, and attach the decoded user object to `req.user`.
- **In-Memory Data Store**: Manages users and user-specific todo arrays dynamically on the server.

### 2. **RESTful API Architecture (Express.js)**
- `POST /signup` - Registers a new user with a unique username and password.
- `POST /signin` - Validates credentials and returns a signed JWT.
- `GET /todos` - Protected endpoint that fetches todos belonging exclusively to the authenticated user.
- `POST /todos` - Protected endpoint to add a new todo item with title and description.
- `PUT /todos/:id` - Protected endpoint to update a todo's completion status.
- `DELETE /todos/:id` - Protected endpoint to remove a todo item.
- `PUT /todos/:id/done` - Protected endpoint to quickly mark a todo as completed.

### 3. **Client-Side Integration (Axios & LocalStorage)**
- **Persistent Sessions**: Stores JWT securely in browser `localStorage` after authentication.
- **Asynchronous HTTP Requests**: Uses `axios` (`async/await`) to communicate seamlessly with backend REST endpoints.
- **Custom Request Headers**: Attaches the stored JWT token to request headers (`headers: { token: token }`) for all protected API calls.
- **Dynamic DOM Rendering**: Clears and re-renders the todo list dynamically upon creating, updating, or deleting items.

### 4. **Modern UI & CSS Architecture**
- **Glassmorphism & Gradients**: Contemporary dark theme design with glowing linear gradients and glassmorphic card containers.
- **Standard CSS Compatibility**: Implemented cross-browser compatible text background clipping (`-webkit-background-clip: text` and `background-clip: text`).
- **Responsive Layout**: Designed using CSS Flexbox, Grid, CSS custom variables, and media queries for smooth responsiveness across desktop and mobile screens.

---

## 📁 Project Structure

```
todo_app/
├── index.js          # Express server, JWT authentication logic, and API routes
├── package.json      # Dependencies (express, jsonwebtoken, etc.)
├── .gitignore        # Ignores node_modules and environment files
├── README.md         # Detailed documentation of concepts and usage
└── public/
    ├── index.html    # Frontend structure (Signup, Signin, Todo management)
    ├── script.js     # Frontend JavaScript with Axios requests & DOM updates
    └── styles.css    # Custom CSS styles, animations, and gradient themes
```

---

## 🛠️ How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aaryanvyas/harkirat-cohort-3-journey.git
   cd "week6/todo_app"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node index.js
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000` in your web browser.

---

## 📝 Assignment Submission Info
- **Cohort**: Harkirat Singh - Web Dev Cohort 3
- **Module**: Week 6 (HTTP Deep Dive, Authentication, JWTs, Middleware, Full-Stack Todo App)
- **Author**: Aaryan Vyas
