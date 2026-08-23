# 📚 Week 03 - DOM Manipulation & State-Derived UIs

This week we explored the Document Object Model (DOM) and how to build web applications where the user interface is completely driven by data (State).

## 📝 What I Studied
- **DOM Access & Modification**: `document.querySelector`, `document.createElement`, `element.appendChild`.
- **State**: The data representation of the application that changes over time (the source of truth).
- **Components**: Reusable, modular functions that turn a piece of state into a DOM element.
- **Rendering**: The process of taking the current state, clearing the old UI, and painting the new UI components onto the DOM.

### 🧠 The State-Derived UI Flow
```text
           [ STATE ] (Data: e.g., todos array)
               ↓
           [ RENDER ] (Clear DOM + Loop state)
               ↓
          [ COMPONENTS ] (createTodoElement() creates HTML)
               ↓
            [ DOM ] (Screen updates for the User)
```

## 💻 What I Coded
- **State-Derived Todo App**: A modular, pure vanilla JS application with Add, Edit, Delete, and Complete functionalities. Styled with a premium glassmorphic UI.

## 🧠 Key Learnings
- **Don't directly mutate the DOM**: Instead of modifying page text or deleting nodes directly on event triggers, update the `state` array first, and then call a generic `render()` function to synchronize the UI.
- **React Precursor**: This architecture is exactly how modern frameworks like React work under the hood (State → VDOM → DOM).
