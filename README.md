# **To-Do List Manager Web Application**

## **Project Overview**

This is a responsive web application for managing a to-do list. It provides a simple and user-friendly interface to create, view, and edit tasks with their titles, descriptions, and status.

The project is built with **React.js** and leverages **Redux Toolkit** for state management. REST API calls are made using a dummy API ([jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)) to fetch and update tasks.

---

## **Features**

### **1. Pages**

#### **Home Page**

- Displays a list of tasks.
- Each task includes:
  - Title
  - Description
  - Status (Completed or Pending)
- Options to **Edit** or **Delete** tasks.

#### **Add Task Page**

- Allows the user to create a new task by providing:
  - Title
  - Description
  - Completion Status.

#### **Edit Task Page**

- Enables the user to update an existing task's:
  - Title
  - Description
  - Completion Status.

---

## **Tech Stack**

| **Technology**       | **Purpose**                   |
| -------------------- | ----------------------------- |
| **React.js**         | Front-end UI development      |
| **Redux Toolkit**    | State management              |
| **Tailwind CSS**     | Styling for responsive design |
| **React Router DOM** | Page navigation               |
| **Axios**            | HTTP client for API calls     |
| **JSONPlaceholder**  | Dummy REST API source         |

---

## **Folder Structure**

```
📦 Todo-ReduxToolKit
├── 📁 src
│   ├── 📁 app
│   │   └── store.js                 # Redux store configuration
│   ├── 📁 components
│   │   ├── AddTodo.jsx              # Component for adding tasks
│   │   ├── UpdateTodo.jsx           # Component for editing tasks
│   │   └── TodoList.jsx             # Component for listing tasks
│   ├── 📁 features
│   │   └── todo
│   │       └── todoSlice.js         # Redux slice for tasks
│   ├── 📁 pages
│   │   ├── HomePage.jsx             # Home page for displaying tasks
│   │   └── AddEditPage.jsx          # Add/Edit page
│   ├── App.jsx                      # Main React component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
└── README.md
```

---

## **Installation and Setup**

### **Clone the repository**

```bash
git clone https://github.com/akshay030/Todo-ReduxToolKit.git
cd Todo-ReduxToolKit
```

### **Install dependencies**

```bash
npm install
```

### **Run the development server**

```bash
npm run dev
```

### **Open the application in your browser**

```bash
http://localhost:5173
```

---

## **API Integration**

This project uses **JSONPlaceholder** as a dummy REST API to fetch and update tasks.

### **Endpoints**

- **GET tasks**: `https://jsonplaceholder.typicode.com/todos`
- **POST new task**: `https://jsonplaceholder.typicode.com/todos`
- **PUT task update**: `https://jsonplaceholder.typicode.com/todos/:id`
- **DELETE task**: `https://jsonplaceholder.typicode.com/todos/:id`

### **Sample Response (GET)**

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

---

## **State Management with Redux Toolkit**

1. **Store Configuration**: The Redux store is initialized in `store.js` using `configureStore`.
2. **Todo Slice**:
   - **Actions**: `fetchTodos`, `addTodo`, `updateTodo`, `deleteTodo`.
   - **Reducers**: Handle the state updates for task actions.

---

## **Components**

1. **TodoList**: Displays all tasks on the Home Page.
2. **AddTodo**: Form to add a new task.
3. **UpdateTodo**: Form to edit an existing task.

---

## **Styling**

- **Responsive Design**: Tailwind CSS ensures the UI works seamlessly across devices.

---

## **Key Scripts**

| **Command**       | **Description**                   |
| ----------------- | --------------------------------- |
| `npm run dev`     | Runs the app in development mode. |
| `npm run build`   | Builds the app for production.    |
| `npm run preview` | Previews the production build.    |

---

## **Demo**

Here is a short walkthrough of the application:

1. **Home Page**: View tasks.
2. **Add Task**: Create new tasks.
3. **Edit Task**: Update task status.
4. **Delete Task**: Remove tasks from the list.

---

## **Future Improvements**

- User authentication for task management.
- Persistence with a real backend database.
- Filtering and sorting tasks (by status, date, etc.).
- Adding due dates and task priorities.

---


Happy Coding! 🚀

