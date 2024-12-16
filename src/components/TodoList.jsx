import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodoAPI } from '../features/todo/todoSlice';
import { Link } from 'react-router-dom';

function TodoList({ todos }) {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-left">Todo List</h1>
        <Link to="/add" className="bg-gray-950 text-white px-4 py-2 rounded-xl hover:bg-gray-600">
          Add New Todo
        </Link>
      </div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-800 p-4 rounded mb-2">
            <div className="text-white">
              <h3 className="text-xl font-bold">{todo.title}</h3>
              <p>{todo.description}</p>
              <p className="text-xs">{todo.completed ? 'Completed' : 'Pending'}</p>
            </div>
            <div className="flex space-x-2">
              <Link to={`/update/${todo.id}`} className="text-blue-500">Edit</Link>
              <button
                onClick={() => dispatch(removeTodoAPI(todo.id))}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
